const fs = require("fs");

fs.readdir(process.cwd(), (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
