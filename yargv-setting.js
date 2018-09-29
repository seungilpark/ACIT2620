const yargv = require("yargs");

module.exports.argv = yargv
  .command("add", "Add a new movie", {
    title: {
      describe: "The title of the movie",
      demand: true,
      alias: "t"
    },
    director: {
      description: "The director of the movie",
      demand: true,
      alias: "d"
    },
    starring: {
      describe: "The starring",
      demand: true,
      alias: "s"
    },
    rating: {
      describe: "The rating of the movie",
      demand: true,
      alias: "r"
    },
    budget: {
      describe: "The budget of the movie",
      demand: true,
      alias: "b"
    },
    year: {
      describe:"The year of the movie",
      demand:true,
      alias:"y"
    }
  })
  .command("delete", "delete a movie", {
    prop: {
      describe: "A property(title,director, etc.) of the movie",
      demand: true,
      alias: "p"
    },
    value: {
      describe:'the value for the property',
      demand:true,
      alias:"v"
    }
  })
  .command("fetch", "Fetch a movie", {
    prop: {
      describe: "A property(title,director, etc.) of the movie",
      demand: true,
      alias: "p"
    },
    value: {
      describe:'the value for the property',
      demand:true,
      alias:"v"
    }
  })
  .command("display", "display movies in the file", {})
  .help().argv;
