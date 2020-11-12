const fs = require("fs");

fs.readdir(process.cwd(), (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

const projectData = require(process.cwd() + "/_data/project.json");
console.log(projectData);
