"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Tutor_1 = require("../model/Tutor");
var Tutor = mongoose.model('Tutor', Tutor_1.TutorSchema);
var TutorController = /** @class */ (function () {
    function TutorController() {
    }
    TutorController.prototype.addNewTutor = function (req, res) {
        console.log(req.body);
        var newTutor = new Tutor(req.body);
        newTutor.save(function (err, user) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            res.send(user);
        });
    };
    TutorController.prototype.getAllTutors = function (req, res) {
        console.log("Get All Tutors");
        Tutor.find({}, function (err, tutor) {
            if (err) {
                res.send(err);
            }
            res.send(tutor);
        });
    };
    TutorController.prototype.getAvailableTutors = function (req, res) {
        console.log("Get All Available Tutors");
        Tutor.find({ available: true }, function (err, tutor) {
            if (err) {
                res.send(err);
            }
            res.send(tutor);
        });
    };
    TutorController.prototype.getTutorByID = function (req, res) {
        console.log("find tutor by suId");
        console.log(req.params.tutorID);
        Tutor.findOne({ suId: req.params.tutorID }, function (err, tutor) {
            if (err)
                res.send(new Error('Failed'));
            else
                res.send(tutor);
        });
    };
    TutorController.prototype.setAvailable = function (req, res) {
        console.log('Change Status API');
        Tutor.findOneAndUpdate({ suId: req.params.tutorID }, { $set: { available: true } }, { "new": true, useFindAndModify: false }, function (err, doc) {
            if (err) {
                console.log(err);
            }
            res.send(doc);
        });
    };
    TutorController.prototype.setUnAvailable = function (req, res) {
        console.log('Change Status API');
        Tutor.findOneAndUpdate({ suId: req.params.tutorID }, { $set: { available: false } }, { "new": true, useFindAndModify: false }, function (err, doc) {
            if (err) {
                console.log(err);
            }
            res.send(doc);
        });
    };
    TutorController.prototype.setSelected = function (req, res) {
        console.log('select tutor');
        Tutor.findOneAndUpdate({ suId: req.params.tutorID }, { $set: { isSelected: true } }, { "new": true, useFindAndModify: false }, function (err, doc) {
            if (err) {
                console.log(err);
            }
            res.send(doc);
        });
    };
    TutorController.prototype.resetSelect = function (req, res) {
        console.log('select tutor');
        Tutor.findOneAndUpdate({ suId: req.params.tutorID }, { $set: { isSelected: false } }, { "new": true, useFindAndModify: false }, function (err, doc) {
            if (err) {
                console.log(err);
            }
            res.send(doc);
        });
    };
    return TutorController;
}());
exports.TutorController = TutorController;
