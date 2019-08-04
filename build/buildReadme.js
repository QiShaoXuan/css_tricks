const fs = require("fs");
const config = require("../docs/.vuepress/config");
const sidebar = config.themeConfig.sidebar;
const linkHead = "https://qishaoxuan.github.io/css_tricks";

fs.readFile("./docs/README.md", "utf-8", (err, data) => {
  if (err) throw err;

  let str = `## 内容 inclued \n`;

  str += sidebar
    .map(
      block =>
        `\n### ${block.title}\n${block.children
          .map(v => `- <a href="${linkHead}${v[0]}">${v[1]}</a>`)
          .join(`\n`)}\n`
    )
    .join("");

  data = data.replace('<div style="display:none"></div>', str);

  fs.writeFile("./README.md", data, err => {
    if (err) throw err;
    console.log("README.md build down");
  });
});
