"use strict";
exports.__esModule = true;
// import express, { Router } from "express";
// import * as express from 'express';
var express = require("express");
// import bodyParser from "body-parser";
var bodyParser = require("body-parser");
var crmRoutes_1 = require("./routes/crmRoutes");
var Mongoose = require("mongoose");
// import cors = require("cors");
// import cors from "cors";
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.routePrv = new crmRoutes_1.Routes();
        // public mongoUrl: string = 'mongodb://localhost/su_tutor';
        this.mongoUrl = 'mongodb+srv://DucVu:Comebacktome-2@cluster0-bowjh.azure.mongodb.net/su_tutor?retryWrites=true&w=majority';
        this.config();
        this.openDBConnection();
        this.routes();
        this.routePrv.routes(this.app);
    }
    App.prototype.config = function () {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // this.app.use(cors());
    };
    App.prototype.openDBConnection = function () {
        console.log('trying to connect to Mongo');
        Mongoose.connect(this.mongoUrl, { useNewUrlParser: true })
            .then(function () {
            console.log('Connected to MongoDB..');
        })["catch"](function (err) { return console.error(err); });
    };
    App.prototype.routes = function () {
        var router = express.Router();
        this.app.use('/', router);
        this.app.use('/', express.static(__dirname + '/angularDist'));
    };
    return App;
}());
exports["default"] = new App().app;
