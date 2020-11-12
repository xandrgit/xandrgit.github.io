const fs = require("fs");
const projectData = require(process.cwd() + "/_data/project.json");

if(projectData.length !== 0) {
  // Data
  console.log(process.cwd() + "/anxgit/");
};
else {
  // fs.writeFile("file", "No projects at the moment", (err) => { console.error(err); });
};
