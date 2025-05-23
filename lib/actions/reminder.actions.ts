"use server";
import mongoose from "mongoose";
import { connectDB } from "../connectdb";
import reminderModel from "../models/reminder";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.GOOGLE_APP_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});
export const createReminder=async(date:string,time:string,message:string,email:string)=>{
    try{
        await connectDB();
        const reminder=await reminderModel.create({date,time,message,email});
        const info = await transporter.sendMail({
            from: '"REMIND ME LATER" <remindmelater.email>',
            to: email,
            subject: "This is a reminder.",
            text: message,
          });
        
          console.log("Message sent:", info.messageId);
        return JSON.parse(JSON.stringify(reminder));
    }
    catch(err:any){
        throw new Error(`Unable to create the reminder: ${err.message}`);
    }
}