console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);

switch (command) {
  case 'add':
    console.log('Adding new note');
    break;
  case 'list':
    console.log('Listing all notes');
    break;
  case 'read':
    console.log('Fetching note');
    break;
  case 'remove':
    console.log('Removing note');
    break;
  default:
    console.log('Command not recognized');
}
