require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var BOT = function() {
    var divider = "\n====================================================================================\n\n"

    this.findArtist = function(artist) {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(URL).then(
            function(response) {
                var json = response.data;
                console.log(json);
            })
    }
}

module.exports = BOT;