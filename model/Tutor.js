"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
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
