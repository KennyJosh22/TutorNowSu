import * as mongoose from 'mongoose';
import {TutorSchema} from '../model/Tutor';
import {Request, Response} from 'express';
import {StudentSchema} from '../model/Student'
import {UserSchema} from '../model/User';

const Tutor = mongoose.model('Tutor', TutorSchema);
const Student = mongoose.model('Student', StudentSchema)
const User = mongoose.model('User', UserSchema)
export class userController {
    public redirectUser(req,res){
        console.log('redirectUser');
        console.log("req: ", req.params.googleID);
        User.findOne({ggID: req.params.googleID}, (err, user) =>{
            if (err){
                console.log("err")
            }
            else{
                if (user){
                    if (user.isTutor){
                        console.log("redirect to the google page")
                        // res.redirect(`http://localhost:3000/#/tutor/${req.params.googleID}`)
                        
                        res.redirect(`https://tutornowsu.azurewebsites.net/#/tutor/${req.params.googleID}`)
                        
                    }
                    else{
                        console.log("redirect to the student page")
                        // res.redirect(`http://localhost:3000/#/student/${req.params.googleID}`)
                        res.redirect(`https://tutornowsu.azurewebsites.net/#/student/${req.params.googleID}`)
                
                    }
                }
                else{
                    console.log("can't find the account")
                    res.redirect(`https://tutornowsu.azurewebsites.net/#/PageNotFound`)
                }
            }
        })


    }   
}