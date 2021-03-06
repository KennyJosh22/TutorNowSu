// import * as mongoose from "mongoose";

import Mongoose = require("mongoose");

const Schema= Mongoose.Schema;

export const StudentSchema = new Schema ({
    firstName: {
        type: String,
        required: "Enter a first name"
    },
    lastName:{
        type: String,
        required: 'Enter a last name'
    }, 
    email: String,
    major: String,
    suId: {
        type: Number,
        required: "Student must have an suId"
    },
}, {collection: 'students'});