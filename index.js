'use strict';
/**
 * Module dependencies.
 */

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    config = require('config'); // get our config file


// =======================
// configuration =========
// =======================
let port = process.env.PORT || config.port; // used to create, sign, and verify tokens
mongoose.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true }); // connect to database
console.log("MongoDb Connection: ", config.dbURL);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false);

app.use(express.static(__dirname + '/public')); 

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

let route = require('./routes');
app.use('', route.userRoute);

// =======================
// start the server ======
// =======================
app.listen(port, '0.0.0.0');
console.log('Magic happens at http://localhost:' + port);

module.exports = app;