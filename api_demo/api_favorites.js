const axios = require('axios');
const API_BASE_URL = 'https://f86f21eacb30.ngrok.io/api';
const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzhlYzUyM2RiMzgyMjIxNGRiYjA1OSIsInVzZXJuYW1lIjoiZGVtbyIsImV4cCI6MTYwMzAwMTY1MSwiaWF0IjoxNTk3ODE3NjUxfQ.xatrkdoXYncQPOdGvPPWBBsYZcSQse6ew2JqC222PTI";

favorite();
unfavorite();
getFavoritesByUser();

function getFavoritesByUser() {
const username = 'demo';
  axios({
      method: 'get',
  url: API_BASE_URL + '/articles?favorited=' + username,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + API_TOKEN
      }
    })
    .then(function(response) {
      console.log("List of favorites");
      console.log(response.data);
    })
    .catch(function(error) {
      if (error.response) {
        console.log("Oops, there was an error with status=" + error.response.status + ", details: " + JSON.stringify(error.response.data));
      }

    });

}

function favorite() {

  const slug = 'mastering-js-consolelog-like-a-pro-pndleo';

  axios({
      method: 'post',
      url: API_BASE_URL + '/articles/' + slug + '/favorite',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + API_TOKEN
      },
      data: ''
    })
    .then(function(response) {
      console.log("Added to favorites");
      console.log(response.data);
    })
    .catch(function(error) {
      if (error.response) {
        console.log("Oops, there was an error with status=" + error.response.status + ", details: " + JSON.stringify(error.response.data));
      }

    });

}

function unfavorite() {

  const slug = 'mastering-js-consolelog-like-a-pro-pndleo';

  axios({
      method: 'delete',
      url: API_BASE_URL + '/articles/' + slug + '/favorite',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + API_TOKEN
      },
      data: ''
    })
    .then(function(response) {
      console.log("Removed from favorites");
      console.log(response.data);
    })
    .catch(function(error) {
      if (error.response) {
        console.log("Oops, there was an error with status=" + error.response.status + ", details: " + JSON.stringify(error.response.data));
      }

    });

}