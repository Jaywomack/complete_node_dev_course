const fs = require('fs');

const getNotes = function () {
  return 'Your notes';
};

// Add Note function that will check for a duplicate title and return an error if the title is a duplicate. If not a duplicate sets notes as array as the preexisting objects that are in the file and pushes each new note onto the array as an object with title and body
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log('New Note Added');
  } else {
    console.log('Note title taken');
  }
};

// Save notes function which writes the notes to the file as a json object
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

// Load notes function that reads the json file and returns the data as an object if the file is empty returns an empty array
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

// Remove note
const removeNote = function (title) {
  console.log(title);
};

module.exports = {
  getNotes,
  addNote,
  removeNote
};
