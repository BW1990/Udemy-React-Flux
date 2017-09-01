var apiKeys = require("./devKeys");

var Fetch = require("whatwg-fetch");
var rootUrl = "https://api.imgur.com/3/";

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKeys.imgurClientId
      }
    })
    .then(function(res) {
      return res.json();
    });
  }
}
