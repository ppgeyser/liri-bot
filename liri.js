require("dotenv").config();

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

var input = process.argv;

var cmd = input[2];
var term = input.slice(3).join(" ");

switch (cmd) {
    case "concert-this":
        console.log("Searching for " + term + "'s next show");
        break;
    case "spotify-this-song":
        console.log("Searching for " + term + " on Spotify");
        break;
    case "movie-this":
        console.log("Searching for " + term + " on IMDB");
        break;
    case "do-what-it-says":
        console.log("Running the command from random.txt");
        break;
    default:
        console.log("Not a valid command");
}