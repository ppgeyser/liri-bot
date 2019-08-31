//required modules
var fs = require("fs");
var BOT = require('./bot');

//new BOT object from constructor in bot.js
var bot = new BOT();

//turning inputs from console into variables
var input = process.argv;
var cmd = input[2];
var term = input.slice(3).join(" ");

//running main function
liri(cmd, term);

//switch case function that is called above and in doingIt
function liri(cmd, term) {
    switch (cmd) {

        //concert-this case
        case "concert-this":

            //searching with user input
            console.log("\nSearching for " + term + "'s next show...\n");
            bot.findArtist(term);
            break;

        //spotify-this-song case
        case "spotify-this-song":

            //default search if no search terms
            if (!term) {
                console.log("\nSearching for The Sign by Ace of Base on Spotify...\n");
                bot.findSong("The Sign Ace of Base");

            //searching with user input
            } else {
                console.log("\nSearching for " + term + " on Spotify...\n");
                bot.findSong(term);
            }
            break;

        //movie-this case
        case "movie-this":

            //default search if no search terms
            if (!term) {
                console.log("\nSearching for Mr. Nobody on OMDB...\n");
                bot.findMovie("Mr. Nobody");

            //searching with user input
            } else {
                console.log("\nSearching for " + term + " on OMDB...\n");
                bot.findMovie(term)
            }
            break;

        //do-what-it-says case
        case "do-what-it-says":

            //adding command to log.txt
            fs.appendFile("log.txt", "do-what-it-says\n\n", function (err) {
                if (err) throw err;
                
                //calling separate doingIt function
                console.log("\nDoing what it says (what even is 'it?')....");
                doingIt();

            })    
            break;

        //in case user doesn't type anything, or types something incompatible
        default:
            console.log("Not a valid command");
    }
}

//doingIt function called in do-what-it-says case
function doingIt() {

    //grab data from random.txt
    fs.readFile("./random.txt", "utf-8", function(err, data) {
        if (err) throw err;
        var randomTxt = data.toString().split(",");

        //separate cmd and search term so that we can stick it back into liri function
        var cmd = randomTxt[0];
        var term = randomTxt[1].slice(1, -1);;
        liri(cmd, term);
    })
}