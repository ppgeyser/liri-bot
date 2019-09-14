# LIRI (Language Interpretation and Recognition Interface) Bot  

LIRI Bot is a command line node app that takes in parameters to display artists' shows from bandsintown, songs from Spotify, or movie information from OMDB. All inputs and outputs are stored in a log.txt file. This is my sixth project for the UCSD Full Stack Web Developer Bootcamp and showcases my understanding of node.js, constructors, modularization, axios, and npm.

### LIRI Commands

**Command**|**Search Term**|**Example**|**Description**
:-----:|:-----:|:-----:|:-----:
concert-this|"band name"|node liri.js concert-this Blink-182|Displays the location, venue, and date of the band's next show.
spotify-this-song|"song title"|node liri.js spotify-this-song Goodbye Yellow Brick Road|Display song information from Spotify. The default song is "The Sign" if no value is entered via the command line.
movie-this|"movie title"|node liri.js movie-this Blade Runner 2049|Display movie information from OMDB. The default movie is "Mr. Nobody" if no search term is entered.
do-what-it-says|-|node liri.js do-what-it-says|Run whatever command and value are saved to the random.txt stored in the commands directory

![ALDSwsJ](https://user-images.githubusercontent.com/50184318/64060278-2abfaa80-cb7f-11e9-9921-3f5524875e12.gif)

![lkhtBxU](https://user-images.githubusercontent.com/50184318/64060295-69556500-cb7f-11e9-9ee0-0728be219e4a.gif)

![we1C8NO](https://user-images.githubusercontent.com/50184318/64060338-f5678c80-cb7f-11e9-9d95-bbfb4a5df5d2.gif)

![sylUsmr](https://user-images.githubusercontent.com/50184318/64060359-2ba50c00-cb80-11e9-801e-628d319f51cc.gif)

### Initializing the App

In order to safeguard our personal Spotify developer keys required for the API call, we used the dotenv package to create environment variables that stored the client ID and client secret. You will need to create a .env app and supply your own Spotify developer credentials in order to make this app work. 

Otherwise, you should be able to clone the repo, run npm install to grab necessary dependancies, and then start using the app!
