const fs = require('fs');
const path = require('path');
const textPath = path.join(__dirname, 'text.txt');

const needFile = fs.createReadStream(textPath);
needFile.on('data', (readText) => {
  const arr = [];
  for (let i = 0; i < readText.length; i++) {
    arr.push(String.fromCharCode(readText[i]));
  }
  console.log(arr.join(''));
});

// node 01-read-file
