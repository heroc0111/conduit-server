const axios = require('axios');
const API_BASE_URL = 'https://361ef5e7e1c5.ngrok.io/api';
const EMAIL = "demo@quod.ai";
const PASSWORD = "QuodAiRocks!";

apiLogin();

function apiLogin() {
  axios({
      method: 'post',
      url: API_BASE_URL + '/users/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "user": {
          "email": EMAIL,
          "password": PASSWORD
        }
      }
    })
    .then(function(response) {
      var token = response.data['user']['token'];
      console.log("Here's your token: " + token);
    })
    .catch(function(error) {
      if (error.response) {
        console.log("Oops, there was an error with status=" + error.response.status + ", details: " + JSON.stringify(error.response.data));
      }
    });
}