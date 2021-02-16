const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// customize yargs version
yargs.version('1.1.0');

// Create add command
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
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
  }
});

// create remove command
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: function () {
    console.log('Removing the note');
  }
});

yargs.command({
  command: 'list',
  describe: 'list the notes',
  handler: function () {
    console.log('list all the notes');
  }
});

yargs.command({
  command: 'read',
  describe: 'read a command',
  handler: function () {
    console.log('reading the command');
  }
});

yargs.parse();
