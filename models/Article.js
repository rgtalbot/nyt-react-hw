var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
    },
    date: {
        type: Date
    },
    url: {
        type: String,
    }
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;



// import mongoose from 'mongoose'
//
//
// const ArticleSchema = mongoose.Schema({
//     title: {
//         type: String,
//     },
//     date: {
//         type: Date
//     },
//     url: {
//         type: String,
//     }
// });
//
// export default mongoose.model('Article', new ArticleSchema)