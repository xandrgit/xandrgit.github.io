const path = require("path"),
    fs = require("fs"),
    yml = require("yamljs"),
    Octokit = require("@octokit/core"),
    octokit = new Octokit.Octokit({ auth: "99bd50f2e64eb3604aee370ca0f54d04078a8c5a" });

function Datas({ path, work }) {
    octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
        owner: "anxgit",
        repo: "anxgit.github.io",
        path: "_data/"+ path +".yml"
    }).then(ful => {
        const buff = new Buffer(ful.data.content, "base64").toString("ascii");
        work(yml.parse(buff));
    });
};

let README = `<p align="center">
<a href="https://anxgit.github.io/" target="_blank">
    <img src="https://anxgit.github.io/assets/logo/black.svg" width="150px"/>
</a>
</p>
<p align="right">{% GITHUB.SOCIAL %}</p>
{% GITHUB.PROJECT %}`;

/* Social */
const _social = () => Datas({ path: "social", work: (json) => {
    let Str = [`<a href="https://twitter.com/${json.TWITTER}" target="_blank">Twitter</a>`];
    
    json.SOCIALS.map((social) => {
        let iStr = `<a href="${social.url}" target="_blank">${social.name}</a>`;
        Str.push(iStr);
    });

    README = README.replace("{% GITHUB.SOCIAL %}", Str.join("&nbsp;"));

    _project();
}});

/* Project */
const _project = () => Datas({ path: "project", work: (json) => {
    if(!null) {
        let Str = ['<table border="0"><tbody>'];

        json.map((prj) => {
            let iStr = `<tr>
${prj.img ? `<td><a href="${prj.url}" target="_blank"><img src="${prj.img}" width="100px"/></a></td>` : undefined}
<td><a href="${prj.url}" target="_blank">${prj.name}</a></td>
<td>${prj.desc}</td>
</tr>`;
            Str.push(iStr);
        });

        Str.push('</tbody></table>');

        README = README.replace("{% GITHUB.PROJECT %}", Str.join(""));
    }
    else README = README.replace("{% GITHUB.PROJECT %}", "<p>projects haven't been created yet</p>");

    rewrite();
}});

_social();

function rewrite() {
    fs.writeFile(path.resolve(__dirname)+ "/README.prebuild.md", README, (err) => {
        if(!err) console.log("done");
    });
};
