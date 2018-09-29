// imports
const Japp = require("./app");
const Movie = require('./movie') 
//setting up yargv
const argv = require("./yargv-setting").argv;
// initialize movieApp
const movieApp = new Japp('movies.json', 'movies');
// create movies.json
movieApp.createFile();

const command = process.argv[2];
if (command === "add") {
    const movie = new Movie(argv.t, argv.d, argv.s,argv.r,argv.b,argv.y);
    movieApp.add(movie);
} else if (command === "delete") {
    movieApp.delete(argv.p,argv.v);
} else if (command === "fetch") {
    let fetched = movieApp.fetch(argv.p,argv.v)
    console.log(fetched);
} else if (command === "display"){
    movieApp.display()
} else {
  console.log("Unknown command!");
}
