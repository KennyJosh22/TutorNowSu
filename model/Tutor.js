"use strict";
// import mongoose from "mongoose";
exports.__esModule = true;
var Mongoose = require("mongoose");
var Schema = Mongoose.Schema;
exports.TutorSchema = new Schema({
    firstName: {
        type: String,
        required: "Enter a first name"
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: String,
    bio: String,
    suId: {
        type: Number,
        required: "Student must have an suId"
    },
    available: {
        type: Boolean,
        required: "Tutor must have field"
    },
    workingHours: {
        type: Number,
        required: "Tutor must have workingHours"
    },
    isSelected: {
        type: Boolean,
        required: "Tutor must have isSelected field"
    }
}, { collection: 'tutors' });
