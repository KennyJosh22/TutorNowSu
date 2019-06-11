"use strict";
// import * as mongoose from "mongoose";
exports.__esModule = true;
var Mongoose = require("mongoose");
var Schema = Mongoose.Schema;
exports.StudentSchema = new Schema({
    firstName: {
        type: String,
        required: "Enter a first name"
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: String,
    major: String,
    suId: {
        type: Number,
        required: "Student must have an suId"
    }
}, { collection: 'students' });
