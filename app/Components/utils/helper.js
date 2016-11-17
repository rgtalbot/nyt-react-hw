import axios from 'axios'

let APIKey = "399f2d0cd963479ba1852fdb0962a9f2";

const helpers = {
    runQuery(term, start, end){
        term = term.trim();
        start = start.trim() + "0101";
        end = end.trim() + "1231";
        console.log('query started');

        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
                'api-key': APIKey,
                'q': term,
                'begin_date': start,
                'end_date': end,
                'sort': "newest"
            }
        })
            .then(function(results) {
                console.log('query finished');
                return results.data.response;
            })
            .catch(function (err) {
                console.log(err);
            })
    },

    getSaved() {
        return axios.get('/api/saved')
            .then(function(results) {
                return results;
            })
    },

    postSaved(title, paragraph, date, url) {
        console.log('posts saved');
        var newArticle = {
            title: title,
            paragraph: paragraph,
            date: date,
            url: url
        };
        console.log('newArticle', newArticle);

        return axios.post('/api/saved', newArticle)
            .then(function(results) {
                console.log('inside helper post');
                console.log(results);
                return results._id;
            })
    },

    deleteSaved(title, paragraph, data, url) {
        var deletedArticle = {
            title: title,
            paragraph: paragraph,
            data: data,
            url: url
        };
        return axios.delete('api/saved', {params: deletedArticle})
            .then(function(results) {
                console.log(results);
                console.log("deleted");
                return results;

            })
    }

};

export default helpers