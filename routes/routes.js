'use strict';
import express from 'express'
import path from 'path'

let router = express.Router();

//Article Schema
import Article from './../models/Article'

//MAIN ROUTE TO SPA
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './../public/index.html'));
});

//==========SCHEMA ROUTES==========
//GET ROUTE
router.get('/api/saved', (req, res)=> {

    Article.find({})
        .exec((err, doc) => {
            if (err)
                throw err;
            else
                res.send(doc);
        })
});

//POST ROUTE
router.post('/api/saved', (req, res) => {
    const saveArticle = new Article(req.body);
    saveArticle.save((err, doc) => {
        if (err)
            console.log(err);
        else
            res.send('saved');
    });
});

//DELETE ROUTE
router.delete('/api/saved/', function (req, res) {
    var url = req.param('url');
    Article.findOneAndRemove({"url": url}).exec((err, data)=> {
        if (err)
            throw err;
        else
            res.send("Deleted");
    });
});

export default router