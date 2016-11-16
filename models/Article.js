import mongoose from 'mongoose'

let ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    paragraph: {
        type: String,
    },
    date: {
        type: Date
    },
    url: {
        type: String,
    }
});

let Article = mongoose.model('Article', ArticleSchema);

export default Article
