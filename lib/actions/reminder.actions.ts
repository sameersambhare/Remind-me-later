"use server";
import mongoose from "mongoose";
import { connectDB } from "../connectdb";
import reminderModel from "../models/reminder";

export const createReminder=async(date:string,time:string,message:string)=>{
    try{
        await connectDB();
        const reminder=await reminderModel.create({date,time,message});
        return JSON.parse(JSON.stringify(reminder));
    }
    catch(err:any){
        throw new Error(`Unable to create the reminder: ${err.message}`);
    }
}