let isConnected=false;
import mongoose from "mongoose";
export const connectDB=async()=>{
    const MONGO_USERNAME=process.env.MONGO_USERNAME;
    const MONGO_PASSWORD=process.env.MONGO_PASSWORD;
    const url=`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.elkl9zw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    if(isConnected) console.log("Already connected to the database");
    else{
        try{
            await mongoose.connect(url);
            isConnected=true;
            console.log("Connected to the database");
        }
        catch(err:any){
            throw new Error(`Unable to connect to the database: ${err.message}`);
        }
    }
}