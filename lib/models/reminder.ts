import mongoose from "mongoose";

const reminderSchema=new mongoose.Schema({
    date:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'sent', 'failed'],
        default: 'pending'
    }
}, {
    timestamps: true
})

const reminderModel = mongoose.models.REMINDER || mongoose.model("REMINDER", reminderSchema);
export default reminderModel;