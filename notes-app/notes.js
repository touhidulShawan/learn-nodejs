const fs = require("fs");
const chalk = require("chalk");

const getNote = () => {
  console.log("Your Note");
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log(chalk.bgGreen("Note added successfully"));
  } else {
    console.log(chalk.bgRed("Note title already taken"));
  }
};

const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const noteToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > noteToKeep.length) {
    console.log(chalk.bgGreen("Note removed successfully"));
    saveNote(noteToKeep);
  } else {
    console.log(chalk.bgRed("Note title does not match! No note removed"));
  }
};

const listNote = () => {
  const notes = loadNotes();

  console.log(chalk.yellowBright.inverse("Your notes"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

module.exports = {
  getNote: getNote,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
};
