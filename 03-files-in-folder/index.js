const fs = require('fs');
const path = require('path');
const textPath = path.join(__dirname, 'secret-folder');
console.log(textPath);
fs.readdir(textPath, (error, myFiles) => {
  if (error) {
    console.log(error);
  } else {
    for (let i = 0; i < myFiles.length; i++) {
      fs.stat(`${textPath}/${myFiles[i]}`, (error, stats) => {
        if (error) {
          console.log(error);
        } else {
          if (stats.isFile()) {
            const extFiles = `${path.extname(myFiles[i])}`;
            const extWithOutPoint = extFiles.slice(1, extFiles.length);
            const sizeFiles = `${(stats.size / 1024).toFixed(3)}kb`;
            const mainFiles = `${path.basename(myFiles[i], extFiles)}`;
            console.log(`${mainFiles} - ${extWithOutPoint} - ${sizeFiles}`);
          }
        }
      });
    }
  }
});

// node 03-files-in-folder
