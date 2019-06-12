"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Tutor_1 = require("../model/Tutor");
var Student_1 = require("../model/Student");
var User_1 = require("../model/User");
var Tutor = mongoose.model('Tutor', Tutor_1.TutorSchema);
var Student = mongoose.model('Student', Student_1.StudentSchema);
var User = mongoose.model('User', User_1.UserSchema);
var userController = /** @class */ (function () {
    function userController() {
    }
    userController.prototype.redirectUser = function (req, res) {
        console.log('redirectUser');
        console.log("req: ", req.params.googleID);
        User.findOne({ ggID: req.params.googleID }, function (err, user) {
            if (err) {
                console.log("err");
            }
            else {
                if (user) {
                    if (user.isTutor) {
                        console.log("redirect to the google page");
                        // res.redirect(`http://localhost:3000/#/tutor/${req.params.googleID}`)
                        res.redirect("https://tutornowsu.azurewebsites.net/#/tutor/" + req.params.googleID);
                    }
                    else {
                        console.log("redirect to the student page");
                        // res.redirect(`http://localhost:3000/#/student/${req.params.googleID}`)
                        res.redirect("https://tutornowsu.azurewebsites.net/#/student/" + req.params.googleID);
                    }
                }
                else {
                    console.log("can't find the account");
                    res.redirect("https://tutornowsu.azurewebsites.net/#/PageNotFound");
                }
            }
        });
    };
    return userController;
}());
exports.userController = userController;
