"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var Student_1 = require("../model/Student");
var Student = Mongoose.model('Student', Student_1.StudentSchema);
var StudentController = /** @class */ (function () {
    function StudentController() {
    }
    StudentController.prototype.addNewStudent = function (req, res) {
        console.log(req.body);
        var newStudent = new Student(req.body);
        //console.log ("add student");
        newStudent.save(function (err, user) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            res.send(user);
            console.log('here\n');
        });
    };
    StudentController.prototype.getAllStudents = function (req, res) {
        console.log("Get All Students");
        Student.find({}, function (err, student) {
            if (err) {
                res.send(err);
            }
            res.send(student);
        });
    };
    StudentController.prototype.getStudentByID = function (req, res) {
        console.log("find students by suId");
        console.log(req.params.studentID);
        Student.findOne({ suId: req.params.studentID }, function (err, student) {
            if (err) {
                res.send(new Error('Failed'));
            }
            else
                res.send(student);
        });
    };
    return StudentController;
}());
exports.StudentController = StudentController;
