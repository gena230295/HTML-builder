const fs = require('fs');
const path = require('path');
const process = require('process');
const processStDin = require('process').stdin;
const textPath = path.join(__dirname, 'text.txt');

fs.appendFile(textPath, '', () => {
  console.log('Please, enter your text:');
});

processStDin.on('data', (change) => {
  fs.appendFile(textPath, change, () => {});
  const checkWord = String(change).trim();
  if (checkWord === 'exit') {
    console.log('You have finished entering text.');
    process.exit();
  }
});

process.on('SIGINT', () => {
  console.log('You have finished entering text.');
  process.exit();
});

// node 02-write-file
