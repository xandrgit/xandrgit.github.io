const fs = require("fs");
const projectData = require(process.cwd() + "/_data/project.json");
const socialData = require(process.cwd() + "/_data/social.json");

// reWrite anxgit/PROJECTS.md
if(projectData.length !== 0) {
  let prjData = "";
  projectData.map((prj, i) => {
    prjData += `### [${prj.name}](${prj.url})\n${prj.desc}\n\n`;
  });
  fs.writeFile(process.cwd() + "/anxgit/PROJECTS.md", Data, (err) => { console.error(err); });
} else {
  fs.writeFile(process.cwd() + "/anxgit/PROJECTS.md", "No projects at the moment", (err) => { console.error(err); });
};

// reWrite anxgit/README.md
let socData = `<h1 align="center">
    <a href="https://github.com/anxgit/anxgit/blob/master/README.md" target="_blank">
        <img src="https://raw.githubusercontent.com/anxgit/anxgit.github.io/master/assets/logo/black.svg" width="100px"/>
    </a>
</h1>

## [Projects](./PROJECTS.md)
{% PROJECTS %}

## Social
[${socialData[0].name}](${socialData[0].url}){% SOCIAL %}`;

/* Projects */
if(projectData.length !== 0) {
  let prjData = "";
  projectData.map((prj, i) => { if(i === 0 || i === 1 || i === 2) prjData += `### <a href="${prj.url}">${prj.name}</a>\n${prj.desc}\n\n`; });
  socData.replace(/{% PROJECTS %}/g, prjData);
} else {
  socData.replace(/{% PROJECTS %}/g, "No projects at the moment");
};

/* Social */
let sd = "";
socialData.map((soc, i) => { if(i !== 0) {
  sd += ` &bull;[${soc.name}](${soc.url})`;
} });
socData.replace(/{% SOCIAL %}/g, sd);
fs.writeFile(process.cwd() + "/anxgit/README.md", socData, (err) => { console.error(err); });
