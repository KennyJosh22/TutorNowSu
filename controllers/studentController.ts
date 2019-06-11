import * as mongoose from 'mongoose';
import {StudentSchema} from '../model/Student';
import {Request, Response} from 'express';

const Student = mongoose.model('Student', StudentSchema);
export class StudentController {    
    public addNewStudent (req:Request, res:Response){
        console.log(req.body);
        let newStudent = new Student(req.body);
        //console.log ("add student");

        newStudent.save( (err, user) =>{
            if (err){
                console.log(err);
                res.send(err);
            }
            res.send(user);
            console.log('here\n'); 
        });
    }   
    public getAllStudents(req:Request, res:Response){
        console.log ("Get All Students");
        Student.find({}, (err, student) =>{
            if (err){
                res.send(err);
            }
            res.send(student);
        });
    }

    public getStudentByID(req, res){
        console.log ("find students by suId");
        console.log(req.params.studentID);
      
        Student.findOne({suId: req.params.studentID}, (err, student) =>{
            if (err) {
                res.send(new Error('Failed'));     
            }                           
            else 
                res.send(student);
        });                  
    }
    
}