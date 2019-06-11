import express, { Router } from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";

import  mongoose from "mongoose";
import cors from "cors";
class App{
    public app: express.Application = express();
    public routePrv: Routes = new Routes();
    // public mongoUrl: string = 'mongodb://localhost/su_tutor';

    public mongoUrl: string = 'mongodb+srv://DucVu:Comebacktome-2@cluster0-bowjh.azure.mongodb.net/tutorNow?retryWrites=true&w=majority';
 
    constructor(){   
        this.config();
        this.openDBConnection();
        this.routePrv.routes(this.app);
        this.routes();
    }
    private config():void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    }
    private openDBConnection():void{
    
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true})
            .then( () => {
                console.log('Connected to MongoDB..')


            })
            .catch( err => console.error(err)) ;
    }

    private routes(): void {
        let router = express.Router();
        this.app.use('/', router);
        this.app.use('/', express.static(__dirname+'/angularDist'));
    }
}

export default new App().app;