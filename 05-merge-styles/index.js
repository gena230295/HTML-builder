const fs = require('fs');
const path = require('path');

const betweenPath = `${__dirname}/project-dist`;
const textPath = path.join(__dirname, 'styles');
const twoTextPath = path.join(betweenPath, 'bundle.css');

fs.truncate(twoTextPath, () => {});
fs.readdir(textPath, (error, cssFiles) => {
  if (error) {
    console.log(error);
  } else {
    cssFiles.forEach((el) => {
      fs.stat(`${textPath}/${el}`, (error, newEl) => {
        if (error) {
          console.log(error);
        } else {
          const arr = el.split('.');
          const extEl = arr.slice(arr.length - 1, arr.length).join('');
          if (extEl === 'css' && newEl.isFile()) {
            fs.readFile(`${textPath}/${el}`, (error, cssFiles) => {
              if (error) {
                console.log(error);
              } else {
                fs.appendFile(twoTextPath, cssFiles, (error) => {
                  if (error) {
                    console.log(error);
                  }
                });
              }
            });
          }
        }
      });
    });
  }
});

// node 05-merge-styles
