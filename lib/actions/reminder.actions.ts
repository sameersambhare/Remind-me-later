"use server";
import { connectDB } from "../connectdb";
import reminderModel from "../models/reminder";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.GOOGLE_APP_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

async function sendReminderEmail(email: string, message: string) {
  try {
    const info = await transporter.sendMail({
      from: `"REMIND ME LATER" ${process.env.GOOGLE_APP_EMAIL}`,
      to: email,
      subject: "This is a reminder.",
      text: message,
    });
    console.log("Message sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

function isTimeToSend(reminderDate: string, reminderTime: string) {
  const now = new Date();
  const [year, month, day] = reminderDate.split('-').map(Number);
  const [hours, minutes] = reminderTime.split(':').map(Number);
  const reminderDateTime = new Date(year, month - 1, day, hours, minutes);
  return now >= reminderDateTime;
}


export async function processPendingReminders() {
  try {
    await connectDB();
    const pendingReminders = await reminderModel.find({ status: 'pending' });
    for (const reminder of pendingReminders) {
      if (isTimeToSend(reminder.date, reminder.time)) {
        const emailSent = await sendReminderEmail(reminder.email, reminder.message);
        reminder.status = emailSent ? 'sent' : 'failed';
        await reminder.save();
      }
    }
  } catch (error) {
    console.error("Error processing reminders:", error);
  }
}

export const createReminder = async(date: string, time: string, message: string, email: string) => {
    try {
        await connectDB();
        const reminder = await reminderModel.create({
          date,
          time,
          message,
          email,
          status: 'pending'
        });
        return JSON.parse(JSON.stringify(reminder));
    } catch(err: any) {
        throw new Error(`Unable to create the reminder: ${err.message}`);
    }
}

const CHECK_INTERVAL = 60000; 
if (typeof window === 'undefined') { 
  setInterval(processPendingReminders, CHECK_INTERVAL);
}