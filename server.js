'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import path from 'path';
import mongoose from 'mongoose';
import routes from './routes/routes'

//EXPRESS
let app = express();
let PORT = process.env.PORT || 3150;
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
let db = mongoose.connection;

db.on('error', (err) => {
    console.log('Mongoose Error: ', err);
});

db.once('open', () => {
    console.log('Mongoose connection successful.');
});





