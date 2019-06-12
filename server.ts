// import app from "./app";
// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log('Express server listening on port ' + port);
// })


import app from "./app";

const path = require('http')
import express = require('express');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/angularDist'));
// app.use('/*', (req,res) =>{
//     res.sendFile(path.join(__dirname));
// })
app.listen(port, () => {
   console.log('Express server listening on port ' + port);
})