"use strict";
exports.__esModule = true;
var studentController_1 = require("../controllers/studentController");
var tutorController_1 = require("../controllers/tutorController");
var userController_1 = require("../controllers/userController");
var googlePassport_1 = require("../googlePassport");
var passport = require('passport');
var Routes = /** @class */ (function () {
    function Routes() {
        this.googlePassportObj = new googlePassport_1["default"]();
        this.Student = new studentController_1.StudentController();
        this.Tutor = new tutorController_1.TutorController();
        this.User = new userController_1.userController();
    }
    Routes.prototype.routes = function (app) {
        //    app.use('/', express.static(__dirname+'/angularDist'));
        app.route("/").get(function (req, res) {
            console.log('get /');
            res.status(200).send("Connected/ HomePage!");
        });
        // Log in SSO
        app.get("/auth/google", passport.authenticate("google", {
            scope: ['https://www.googleapis.com/auth/plus.login', 'email']
        }));
        app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/auth/google', session: false }), function (req, res) {
            console.log('wooo we authenticated, here is our user id:', req.user.id);
            res.redirect("http://tutornowsu.azurewebsites.net/redirect/" + req.user.id);
        });
        app.route("/redirect/:googleID").get(this.User.redirectUser);
        app.route("/api/student/addNewStudent").post(this.Student.addNewStudent);
        app.route("/api/students/").get(this.Student.getAllStudents);
        app.route("/api/student/:studentID").get(this.Student.getStudentByID);
        //-------------------------- Tutor Route  -----------------------------------------
        app.route("/api/tutor/addNewTuTor").post(this.Tutor.addNewTutor);
        app.route("/api/tutors/").get(this.Tutor.getAllTutors);
        app.route("/api/tutors/getAvailableTutors").get(this.Tutor.getAvailableTutors);
        app.route("/api/tutor/:tutorID").get(this.Tutor.getTutorByID);
        app.route("/api/tutor/setAvailable/:tutorID").put(this.Tutor.setAvailable);
        app.route("/api/tutor/setUnAvailable/:tutorID").put(this.Tutor.setUnAvailable);
        app.route("/api/tutor/setSelected/:tutorID").put(this.Tutor.setSelected);
        app.route("/api/tutor/unSelected/:tutorID").put(this.Tutor.resetSelect);
        //    app.use('/', express.static(__dirname+'/angularDist'));
    };
    return Routes;
}());
exports.Routes = Routes;
