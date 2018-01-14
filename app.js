console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs: ', argv);

switch (command) {
  case 'add':
    console.log('Adding new note');
    var note = notes.addNote(argv.title, argv.body);

    if (note) {
      console.log('Note created');
      notes.logNote(note);
    } else {
      console.log('Note title already in use.');
    }
    break;
  case 'list':
    console.log('Listing all notes');
    notes.getAll();
    break;
  case 'read':
    console.log('Fetching note');
    var note = notes.getNote(argv.title);

    if (note) {
      console.log('Note found');
      notes.logNote(note);
    } else {
      console.log('Note not found.');
    }
    break;
  case 'remove':
    console.log('Removing note');
    var noteRemoved = notes.removeNote(argv.title);
    console.log(noteRemoved);
    var message = noteRemoved ? `Note was removed` : `Note not found`;
    console.log(message);
    break;
  default:
    console.log('Command not recognized');
}
