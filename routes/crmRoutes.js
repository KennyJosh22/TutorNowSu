"use strict";
exports.__esModule = true;
var studentController_1 = require("../controllers/studentController");
var tutorController_1 = require("../controllers/tutorController");
var Routes = /** @class */ (function () {
    function Routes() {
        this.Student = new studentController_1.StudentController();
        this.Tutor = new tutorController_1.TutorController();
    }
    Routes.prototype.routes = function (app) {
        //    app.route("/").get ((req:Request, res:Response) =>{
        //        console.log ('get /');
        //        res.status(200). send("Connected/ HomePage!");
        //    })
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
