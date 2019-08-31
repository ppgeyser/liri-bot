var fs = require("fs");
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
        if (!term) {
            console.log("\nSearching for The Sign by Ace of Base on Spotify...\n");
            bot.findSong("The Sign Ace of Base");
        } else {
            console.log("\nSearching for " + term + " on Spotify...\n");
            bot.findSong(term);
        }
        break;
    case "movie-this":
        if (!term) {
            console.log("\nSearching for Mr. Nobody on OMDB...");
            bot.findMovie("Mr. Nobody");
        } else {
            console.log("\nSearching for " + term + " on OMDB...");
            bot.findMovie(term)
        }
        break;
    case "do-what-it-says":
        console.log("\nDoing what it says (what even is 'it?')....\n");
        doingIt();
        break;
    default:
        console.log("Not a valid command");
}

function doingIt() {
    fs.readFile("./random.txt", "utf-8", function(err, data) {
        if (err) throw err;
        console.log(data);
    })
}