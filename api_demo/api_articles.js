const axios = require('axios');
const API_BASE_URL = 'https://361ef5e7e1c5.ngrok.io/api';
const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzhmMGM0M2ZlMThhZWUxNmIwNTU5NyIsInVzZXJuYW1lIjoicXVvZGFpIiwiZXhwIjoxNjAyOTUxNzkzLCJpYXQiOjE1OTc3Njc3OTN9.GfZwa0buja0Au_hmT5Q-zD082mLMQLdk0lDsg6A3Lok";

createArticle();
// getArticles();

function getArticles() {

    axios({
            method: 'get',
            url: API_BASE_URL + '/articles',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + API_TOKEN
            }
        })
        .then(function(response) {
            console.log("Retrieving all articles:")
            var articles = response.data['articles'];
            for (let i = 0; i < articles.length; i++) {
                console.log(articles);
            }
        })
        .catch(function(error) {
            console.log(error);
        });

}


function createArticle() {

    axios({
            method: 'post',
            url: API_BASE_URL + '/articles',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + API_TOKEN
            },
            data: JSON.stringify({
                "article": {
                    "title": "How to train your dragon2",
                    "description": "Ever wonder how?",
                    "body": "Very carefully.",
                    "tagList": ["dragons", "training"]
                }
            })
        })
        .then(function(response) {
            console.log("Creating article");
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        });

}
