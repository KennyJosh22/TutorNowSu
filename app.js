"use strict";
exports.__esModule = true;
// import express, { Router } from "express";
// import * as express from 'express';
var express = require("express");
// import bodyParser from "body-parser";
var bodyParser = require("body-parser");
var crmRoutes_1 = require("./routes/crmRoutes");
var Mongoose = require("mongoose");
var cors = require("cors");
// import cors from "cors";
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.routePrv = new crmRoutes_1.Routes();
        // public mongoUrl: string = 'mongodb://localhost/su_tutor';
        this.mongoUrl = 'mongodb+srv://DucVu:Comebacktome-2@cluster0-bowjh.azure.mongodb.net/tutorNow?retryWrites=true&w=majority';
        this.config();
        this.openDBConnection();
        this.routePrv.routes(this.app);
    }
    App.prototype.config = function () {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    };
    App.prototype.openDBConnection = function () {
        Mongoose.connect(this.mongoUrl, { useNewUrlParser: true })
            .then(function () {
            console.log('Connected to MongoDB..');
        })["catch"](function (err) { return console.error(err); });
    };
    return App;
}());
exports["default"] = new App().app;
