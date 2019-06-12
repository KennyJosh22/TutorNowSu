"use strict";
// import app from "./app";
// const port = process.env.PORT || 3000;
exports.__esModule = true;
// app.listen(port, () => {
//     console.log('Express server listening on port ' + port);
// })
var app_1 = require("./app");
var path = require('http');
var express = require("express");
var port = process.env.PORT || 3000;
app_1["default"].use(express.static(__dirname + '/angularDist'));
// app.use('/*', (req,res) =>{
//     res.sendFile(path.join(__dirname));
// })
app_1["default"].listen(port, function () {
    console.log('Express server listening on port ' + port);
});
