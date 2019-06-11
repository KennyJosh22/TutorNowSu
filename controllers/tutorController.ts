import * as mongoose from 'mongoose';
import {TutorSchema} from '../model/Tutor';
import {Request, Response} from 'express';

const Tutor = mongoose.model('Tutor', TutorSchema);
export class TutorController {    
    public addNewTutor (req:Request, res:Response){
        console.log(req.body);
        let newTutor = new Tutor(req.body);

        newTutor.save( (err, user) =>{
            if (err){
                console.log(err);
                res.send(err);
            }
            res.send(user);
        });
    }   
    public getAllTutors(req:Request, res:Response){
        console.log ("Get All Tutors")
        Tutor.find({}, (err, tutor) =>{
            if (err){
                res.send(err);
            }
            res.send(tutor);
        });
    }

    public getAvailableTutors(req:Request, res:Response){
        console.log ("Get All Available Tutors")
        Tutor.find({available: true}, (err, tutor) =>{
            if (err){
                res.send(err);
            }
            res.send(tutor);
        });
    }

    public getTutorByID(req, res){
        console.log ("find tutor by suId");
        console.log(req.params.tutorID);
      
        Tutor.findOne({suId: req.params.tutorID}, (err, tutor) =>{
            if (err) 
                res.send(new Error('Failed'));                                
            else 
                res.send(tutor);
        });                  
    }

    public setAvailable(req:Request, res:Response){
        console.log('Change Status API');
        Tutor.findOneAndUpdate({suId: req.params.tutorID}, {$set:{available: true}}, {new:true, useFindAndModify: false}, 
        (err, doc) =>{
            if (err){
                console.log (err);
            }
            res.send(doc);
        } )
    }

    public setUnAvailable(req:Request, res:Response){
        console.log('Change Status API');
        Tutor.findOneAndUpdate({suId: req.params.tutorID}, {$set:{available: false}}, {new:true, useFindAndModify: false}, 
        (err, doc) =>{
            if (err){
                console.log (err);
            }
            res.send(doc);
        } )
    }

    public setSelected(req:Request, res:Response){
        console.log('select tutor');
        Tutor.findOneAndUpdate({suId: req.params.tutorID}, {$set:{isSelected: true}}, {new:true, useFindAndModify: false}, 
            (err, doc) =>{
            if (err){
                    console.log (err);
                }
            res.send(doc);
        } )
    }
    public resetSelect(req:Request, res:Response){
        console.log('select tutor');
        Tutor.findOneAndUpdate({suId: req.params.tutorID}, {$set:{isSelected: false}}, {new:true, useFindAndModify: false}, 
            (err, doc) =>{
            if (err){
                    console.log (err);
                }
            res.send(doc);
        } )
    }

    
    






    
}