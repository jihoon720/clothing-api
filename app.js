//npm packages 
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bluebird = require('bluebird');
const app = express();

//use bluebird for mongo's promise
mongoose.Promise = bluebird;
mongoose.connect('mongodb://127.0.0.1:27017/website')
	.then(()=>{console.log('Server running on mongodb://127.0.0.1:27017/website')})
	.catch(()=>{console.log("Error connecting to server mongodb://127.0.0.1:27017/website")});

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

//allow Cross Origin Request for frontend
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
});

module.exports = app;