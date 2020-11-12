const fs = require("fs");
const projectData = require(process.cwd() + "/_data/project.json");

if(projectData.length !== 0) {
  let Data = "";
  projectData.map((prj, i) => {
    Data += `### <a href="${prj.url}">${prj.name}</a>\n${prj.desc}\n\n`;
  });
  fs.writeFile(process.cwd() + "/anxgit/PROJECTS.md", Data, (err) => { console.error(err); });
} else {
  fs.writeFile(process.cwd() + "/anxgit/PROJECTS.md", "No projects at the moment", (err) => { console.error(err); });
};
