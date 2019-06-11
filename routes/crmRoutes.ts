import express,{Request, Response} from "express";
import {StudentController} from "../controllers/studentController";
import {TutorController} from "../controllers/tutorController";
export class Routes {
    public Student: StudentController;
    public Tutor: TutorController;
    

    constructor(){
        this.Student = new StudentController();
        this.Tutor = new TutorController();
    }
    public routes(app:express.Application) :void{
       app.route("/").get ((req:Request, res:Response) =>{
           console.log ('get /');
           res.status(200). send("Connected/ HomePage!");
       })

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



    
    }

}