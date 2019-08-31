require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var BOT = function () {
    var divider = "\n====================================================================================\n\n"

    this.findArtist = function (artist) {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(URL).then(
            function (response) {
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

    this.findSong = function (song) {
        spotify
            .search({
                type: 'track',
                query: song,
                limit: 1
            })
            .then(function (response) {
                var json = response.tracks.items[0];

                var data = [
                    "Artist: " + json.artists[0].name,
                    "Song Name: " + json.name,
                    "Album: " + json.album.name,
                    "Preview: " + json.preview_url
                ].join("\n\n");

                fs.appendFile("log.txt", "spotify-this-song " + song + "\n\n" + data + divider, function (err) {
                    if (err) throw err;
                    console.log(data);
                })
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    this.findMovie = function (movie) {
        var URL = "https://www.omdbapi.com/?apikey=trilogy&t=" + movie + "&y&type=movie&plot=short";
        axios.get(URL).then(
            function (response) {
                var json = response.data;

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

                console.log(data);

                // fs.appendFile("log.txt", "concert-this " + artist + "\n\n" + data + divider, function (err) {
                //     if (err) throw err;
                //     console.log(data);
                // })
            })
    }
}

module.exports = BOT;