import mongoose from "mongoose";

const Schema= mongoose.Schema;

export const TutorSchema = new Schema ({
    firstName: {
        type: String,
        required: "Enter a first name"
    },
    lastName:{
        type: String,
        required: 'Enter a last name'
    }, 
    email: String,
    bio: String, 
    suId: {
        type: Number,
        required: "Student must have an suId"
    },
    available:{
        type: Boolean,
        required: "Tutor must have field"
    },
    workingHours:{
        type: Number,
        required: "Tutor must have workingHours"

    },
    isSelected:{
        type: Boolean,
        required: "Tutor must have isSelected field"
 
    }
}, {collection:'tutors'});