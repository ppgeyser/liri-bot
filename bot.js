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
                
                var data = [
                    "Venue name: " + json[0].venue.name,
                    "Venue location: " + json[0].venue.city + " " + json[0].venue.region,
                    "Date: " + moment(json[0].datetime).format("MM/DD/YYYY")
                ].join("\n\n");

                fs.appendFile("log.txt", "concert-this " + artist + "\n\n" + data + divider, function (err) {
                    if (err) throw err;
                    console.log(data);

                })
            })
    }
}

module.exports = BOT;