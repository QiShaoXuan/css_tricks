const fs = require("fs");
const path = require("path");
const CONFIG = require("../docs/.vuepress/config");
const linkHead = "https://qishaoxuan.github.io/css_tricks";
//
buildZh();
buildEn();
function buildZh() {
  const sidebar = CONFIG["themeConfig"]["locales"]["/"]["sidebar"];
  const entryPath = path.resolve(__dirname, "../docs/README.md");
  const outputPath = path.resolve(__dirname, "../README.md");
  fs.readFile(entryPath, "utf-8", (err, data) => {
    if (err) throw err;

    let str = `## 内容 \n`;

    str += sidebar
      .map(
        block =>
          `\n### ${block.title}\n${block.children
            .map(v => `- <a href="${linkHead}${v[0]}">${v[1]}</a>`)
            .join(`\n`)}\n`
      )
      .join("");

    data = data.replace('<div style="display:none" id="list-zh"></div>', str);

    data = data.replace(
      '<div style="display:none" id="local-en"></div>',
      `<a href='https://github.com/QiShaoXuan/css_tricks/blob/master/README_en.md'>English</a>`
    );

    fs.writeFile(outputPath, data, err => {
      if (err) throw err;
      console.log("README.md zh build down");
    });
  });
}

function buildEn() {
  const sidebar = CONFIG["themeConfig"]["locales"]["/_en/"]["sidebar"];
  const entryPath = path.resolve(__dirname, "../docs/_en/README.md");
  const outputPath = path.resolve(__dirname, "../README_en.md");
  fs.readFile(entryPath, "utf-8", (err, data) => {
    if (err) throw err;

    let str = `## Inclued \n`;

    str += sidebar
      .map(
        block =>
          `\n### ${block.title}\n${block.children
            .map(v => `- <a href="${linkHead}${v[0]}">${v[1]}</a>`)
            .join(`\n`)}\n`
      )
      .join("");

    data = data.replace(
      '<div style="display:none" id="local-zh"></div>',
      `<a href='https://github.com/QiShaoXuan/css_tricks/'>中文</a>`
    );

    data = data.replace('<div style="display:none" id="list-en"></div>', str);

    fs.writeFile(outputPath, data, err => {
      if (err) throw err;
      console.log("README.md en build down");
    });
  });
}
