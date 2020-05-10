const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//  Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note details",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Remove Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// Read a single note
yargs.command({
  command: "read",
  describe: "Show a single note",
  handler: function () {
    console.log("Showing single note");
  },
});

// Show all notes
yargs.command({
  command: "list",
  describe: "Show all notes",
  handler: function () {
    console.log("Showing all notes");
  },
});

yargs.parse();
