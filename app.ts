// import express, { Router } from "express";
// import * as express from 'express';
import express = require('express');
// import bodyParser from "body-parser";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";

import Mongoose = require("mongoose");
// import cors = require("cors");
// import cors from "cors";
class App{
    public app: express.Application = express();
    public routePrv: Routes = new Routes();
    // public mongoUrl: string = 'mongodb://localhost/su_tutor';

    public mongoUrl: string = 'mongodb+srv://DucVu:Comebacktome-2@cluster0-bowjh.azure.mongodb.net/su_tutor?retryWrites=true&w=majority';
 
    constructor(){   
        this.config();
        this.openDBConnection();
        this.routes();
        this.routePrv.routes(this.app);     
    }
    private config():void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // this.app.use(cors());
    }
    private openDBConnection():void{

        console.log('trying to connect to Mongo')
        Mongoose.connect(this.mongoUrl, {useNewUrlParser: true})
            .then( () => {
                console.log('Connected to MongoDB..')


            })
            .catch( err => console.error(err)) ;
    }

    private routes() {
        let router = express.Router();
        this.app.use('/', router);
        this.app.use('/', express.static(__dirname+'/angularDist'));
    }


}

export default new App().app;