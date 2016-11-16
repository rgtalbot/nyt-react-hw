//NPM Packages
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var mongoose = require('mongoose');
var routes = require('./routes/routes');

//EXPRESS
var app = express();
var PORT = process.env.PORT || 3150;
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static(path.join(__dirname, './public')));
app.use('/', routes);

//MONGO DB
mongoose.connect('mongodb://heroku_j3994l01:er6m0l34amm8jn958eqrg1bvsa@ds155087.mlab.com:55087/heroku_j3994l01');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Mongoose Error: ', err);
});

db.once('open', function () {
    console.log('Mongoose connection successful.');
});





