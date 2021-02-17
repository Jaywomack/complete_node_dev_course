const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// customize yargs version
yargs.version('1.1.0');

// Create command that adds a note
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// create command that removes a note
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  }
});

// Create a command that lists the notes
yargs.command({
  command: 'list',
  describe: 'list the notes',
  handler: function () {
    console.log('list all the notes');
  }
});

// Create a command that reads a note
yargs.command({
  command: 'read',
  describe: 'read a command',
  handler: function () {
    console.log('reading the command');
  }
});

yargs.parse();
