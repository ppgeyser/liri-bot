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
            bot.findSong("The Sign Ace of Base");
        } else {
            console.log("\nSearching for " + term + " on Spotify...\n");
            bot.findSong(term);
        }
        break;
    case "movie-this":
        if (!term) {
            bot.findMovie("Mr. Nobody");
        } else {
            console.log("\nSearching for " + term + " on OMDB...");
            bot.findMovie(term)
        }
        break;
    case "do-what-it-says":
        console.log("\nRunning the command from random.txt...\n");
        break;
    default:
        console.log("Not a valid command");
}