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

fs.readdir(textPathCopy, (error, allNewFolder) => {
  if (error) {
    console.log(error);
  } else {
    allNewFolder.forEach((el) => {
      fs.unlink(`${textPathCopy}/${el}`, (error) => {
        if (error) {
          console.log(error);
        }
      });
    });
  }
});

fs.readdir(textPath, (error, allFolder) => {
  if (error) {
    console.log(error);
  } else {
    allFolder.forEach((el) => {
      fs.copyFile(`${textPath}/${el}`, `${textPathCopy}/${el}`, (error) => {
        if (error) {
          console.log(error);
        }
      });
    });
  }
});

// node 04-copy-directory
