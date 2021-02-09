const fs = require('fs');

// Write a file
fs.writeFileSync('notes.txt', 'This file was created by nodeJS');

// // Delete a file with fs.unlink
// fs.unlink('notes.txt', (err) => {
//   if (err) throw err;
//   console.log('deleted notes.txt');
// });

fs.appendFileSync(
  'notes.txt',
  '\nThis is the data that is to be appended',
  (err) => {
    if (err) throw err;
    console.log('Appended data to the file');
  }
);
