'use strict';
var express = require('express');
var path = require('path');
let router = express.Router();

//Article Schema
var Article = require('./../models/Article');

//MAIN ROUTE TO SPA
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './../public/index.html'));
});

//==========SCHEMA ROUTES==========
//GET ROUTE
router.get('/api/saved', function (req, res) {

    Article.find({})
        .exec(function (err, doc) {
            if (err)
                throw err;
            else
                res.send(doc);
        })
});

//POST ROUTE
router.post('/api/saved', function (req, res) {

    var saveArticle = new Article(req.body);

    saveArticle.save(function (err, doc) {
        if (err)
            throw err;
        else
            res.send('saved');
    });
});

//DELETE ROUTE
router.delete('/api/saved/', function (req, res) {

    var url = req.param('url');

    Article.findOneAndRemove({"url": url}).exec(function (err, data) {
        if (err)
            throw err;
        else
            res.send("Deleted");
    });
});

module.exports = router;