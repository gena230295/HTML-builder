const path = require('path');
const fs = require('fs');
const textPath = path.join(__dirname, 'files');
const textPathCopy = path.join(__dirname, 'files-copy');
const notError = { recursive: true };

fs.mkdir(textPathCopy, notError, (error) => {
  if (error) {
    console.log(error);
  }
});

fs.readdir(textPathCopy, (err, allNewFolder) => {
  if (err) {
    console.log(err);
  } else {
    allNewFolder.forEach((el) => {
      fs.unlink(`${textPathCopy}/${el}`, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
});

fs.readdir(textPath, (err, allFolder) => {
  if (err) {
    console.log(err);
  } else {
    allFolder.forEach((el) => {
      fs.copyFile(`${textPath}/${el}`, `${textPathCopy}/${el}`, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
});

// node 04-copy-directory
