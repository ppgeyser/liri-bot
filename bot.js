//Required modules
require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys");
var moment = require("moment");
var Spotify = require("node-spotify-api");

//Create spotify object based off of node-spotify-api and using keys from keys.js/.env
var spotify = new Spotify(keys.spotify);

//Bot constructor that will be called in liri.js
var BOT = function () {

    //For appending in log.txt
    var divider = "\n====================================================================================\n\n"

    //BOT Method that concert-this will use in liri.js
    this.findArtist = function (artist) {

        //axios API call
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(URL).then(
            function (response) {
                var json = response.data;

                //Data that will be printed in console and log.txt
                var data = [
                    "Venue name: " + json[0].venue.name,
                    "Venue location: " + json[0].venue.city + " " + json[0].venue.region,
                    "Date: " + moment(json[0].datetime).format("MM/DD/YYYY")
                ].join("\n\n");

                //Add data to log.txt and print to console
                fs.appendFile("log.txt", "concert-this " + artist + "\n\n" + data + divider, function (err) {
                    if (err) throw err;
                    console.log(data);

                })
            })
    }

    //BOT Method that spotify-this-song will use in liri.js
    this.findSong = function (song) {

        //node-spotify-api call
        spotify
            .search({
                type: 'track',
                query: song,
                limit: 1
            })
            .then(function (response) {
                var json = response.tracks.items[0];

                //Data that will be printed in console and log.txt
                var data = [
                    "Artist: " + json.artists[0].name,
                    "Song Name: " + json.name,
                    "Album: " + json.album.name,
                    "Preview: " + json.preview_url
                ].join("\n\n");

                //Add data to log.txt and print to console
                fs.appendFile("log.txt", "spotify-this-song " + song + "\n\n" + data + divider, function (err) {
                    if (err) throw err;
                    console.log(data);
                })
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    //BOT Method that movie-this will use in liri.js
    this.findMovie = function (movie) {

        //axios API call
        var URL = "https://www.omdbapi.com/?apikey=trilogy&t=" + movie + "&y&type=movie&plot=short";
        axios.get(URL).then(
            function (response) {
                var json = response.data;

                //Data that will be printed in console and log.txt
                var data = [
                    "Title: " + json.Title,
                    "Released: " + json.Year,
                    "IMDB Rating: " + json.Ratings[0].Value,
                    "Rotten Tomatoes Rating: " + json.Ratings[1].Value,
                    "Country: " + json.Country,
                    "Language: " + json.Language,
                    "Plot: " + json.Plot,
                    "Actors: " + json.Actors,
                ].join("\n\n");

                //Add data to log.txt and print to console
                fs.appendFile("log.txt", "movie-this " + movie + "\n\n" + data + divider, function (err) {
                    if (err) throw err;
                    console.log(data);
                })
            })
    }
}

//Make constructor available to liri.js
module.exports = BOT;