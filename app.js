"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var crmRoutes_1 = require("./routes/crmRoutes");
var mongoose_1 = require("mongoose");
var cors_1 = require("cors");
var App = /** @class */ (function () {
    function App() {
        this.app = express_1["default"]();
        this.routePrv = new crmRoutes_1.Routes();
        // public mongoUrl: string = 'mongodb://localhost/su_tutor';
        this.mongoUrl = 'mongodb+srv://DucVu:Comebacktome-2@cluster0-bowjh.azure.mongodb.net/tutorNow?retryWrites=true&w=majority';
        this.config();
        this.openDBConnection();
        this.routePrv.routes(this.app);
        this.routes();
    }
    App.prototype.config = function () {
        // support application/json type post data
        this.app.use(body_parser_1["default"].json());
        //support application/x-www-form-urlencoded post data
        this.app.use(body_parser_1["default"].urlencoded({ extended: false }));
        this.app.use(cors_1["default"]());
    };
    App.prototype.openDBConnection = function () {
        mongoose_1["default"].connect(this.mongoUrl, { useNewUrlParser: true })
            .then(function () {
            console.log('Connected to MongoDB..');
        })["catch"](function (err) { return console.error(err); });
    };
    App.prototype.routes = function () {
        var router = express_1["default"].Router();
        this.app.use('/', router);
        this.app.use('/', express_1["default"].static(__dirname + '/angularDist'));
    };
    return App;
}());
exports["default"] = new App().app;
