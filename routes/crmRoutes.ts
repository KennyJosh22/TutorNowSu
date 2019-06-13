// import express,{Request, Response} from "express";
import * as express from 'express';
import {Request, Response} from "express";
import {StudentController} from "../controllers/studentController";
import {TutorController} from "../controllers/tutorController";
import {userController} from "../controllers/userController"
import GooglePassport from "../googlePassport";

let passport = require('passport');
export class Routes {
    public Student: StudentController;
    public Tutor: TutorController;
    public User: userController;
    public googlePassportObj:GooglePassport;

    

    constructor(){
        this.googlePassportObj = new GooglePassport();
        this.Student = new StudentController();
        this.Tutor = new TutorController();
        this.User = new userController();
    }
    public routes(app:express.Application) :void {
        //    app.use('/', express.static(__dirname+'/angularDist'));
       app.route("/").get ((req:Request, res:Response) =>{
           console.log ('get /');
           res.status(200). send("Connected/ HomePage!");
       })

        // Log in SSO
        app.get("/auth/google", passport.authenticate("google",{
            scope:['https://www.googleapis.com/auth/plus.login', 'email']
        }));

        app.get('/auth/google/callback',passport.authenticate('google', { failureRedirect: '/auth/google', session: false }),
        (req:any, res) => {
                console.log('wooo we authenticated, here is our user id and email:',req.user.id);
                res.redirect(`http://tutornowsu.azurewebsites.net/redirect/${req.user.id}`)
            }
        )

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
        //   app.use('/', express.static(__dirname+'/angularDist'));
    }
}