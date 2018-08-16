//@ts-check
'use strict';



//Require thingy
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//constants
const portNum = 8888;

//instantiate express
let app = express();


/**Custom middleware
 * 
 * @param {typeof app.request} req 
 * @param {typeof app.response} res 
 * @param {function} next 
 */
function logger(req, res, next){
    console.log("logging");
    next();
}
app.use(logger);


/**
 * @param {typeof app.request} req Request
 * @param {typeof app.response} res Response
 */
function getHandler(req, res){
    res.send("Hello World");
}

app.get('/', getHandler)

app.listen(portNum, ()=>{console.log(`Server Started at port:${portNum}`)});