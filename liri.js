var BOT = require('./bot');

var bot = new BOT();

var input = process.argv;

var cmd = input[2];
var term = input.slice(3).join(" ");

switch (cmd) {
    case "concert-this":
        console.log("\nSearching for " + term + "'s next show...\n");
        bot.findArtist(term);
        break;
    case "spotify-this-song":
        console.log("\nSearching for " + term + " on Spotify...\n");
        break;
    case "movie-this":
        console.log("\nSearching for " + term + " on IMDB...");
        break;
    case "do-what-it-says":
        console.log("\nRunning the command from random.txt...\n");
        break;
    default:
        console.log("Not a valid command");
}