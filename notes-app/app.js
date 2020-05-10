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
  builder: {
    title: {
      describe: "Note title to show note detail",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

// Show all notes title
yargs.command({
  command: "list",
  describe: "Show all notes title",
  handler: function () {
    notes.listNote();
  },
});

yargs.parse();
