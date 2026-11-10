import { existsSync } from "node:fs";
import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import { popperContainerId } from "./element-ssr.mjs";
import sidebars from "./sidebar.cjs";

const base = "/css_tricks/";
const repo = "https://github.com/QiShaoXuan/css_tricks";
const docsDir = fileURLToPath(new URL("..", import.meta.url));
const englishDir = "_en/";

export default defineConfig({
  title: "CSS Tricks",
  description: "一些常用的 CSS 样式, 一点 CSS 技巧",
  base,
  outDir: "../dist",
  appearance: false,
  markdown: { theme: "github-dark" },
  rewrites: (page) => page.replace(/(^|\/)README\.md$/, "$1index.md"),
  transformPageData(page) {
    const isEnglish = page.filePath.startsWith(englishDir);
    const counterpart = isEnglish ? page.filePath.slice(englishDir.length) : englishDir + page.filePath;
    const path = existsSync(join(docsDir, counterpart))
      ? counterpart.replace(/(^|\/)README\.md$/, "$1").replace(/\.md$/, ".html")
      : isEnglish ? "" : englishDir;
    page.frontmatter.languageLink = `/${path}`;
  },
  postRender(context) {
    const poppers = context.teleports?.[`#${popperContainerId}`];
    if (poppers) {
      context.teleports.body = `${context.teleports.body || ""}<div id="${popperContainerId}">${poppers}</div>`;
    }
  },
  async buildEnd({ outDir }) {
    const scripts = join(outDir, "scripts");
    await mkdir(scripts, { recursive: true });
    await copyFile(new URL("./theme/scripts/parabola.js", import.meta.url), join(scripts, "parabola.js"));
  },
  head: [
    ["link", { rel: "icon", href: `${base}images/favicon.png` }],
    ["meta", { name: "theme-color", content: "#00adb5" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["meta", { name: "msapplication-TileColor", content: "#00adb5" }],
    ["meta", { itemprop: "name", content: "CSSTricks" }],
    ["meta", { itemprop: "image", content: `${base}images/favicon.png` }],
    ["script", {
      async: "",
      crossorigin: "anonymous",
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3591151685475548",
    }],
  ],
  locales: {
    root: {
      lang: "zh-CN",
      themeConfig: {
        sidebar: sidebars["/"],
        outline: { label: "本页目录" },
        sidebarMenuLabel: "菜单",
        returnToTopLabel: "返回顶部",
        docFooter: { prev: "上一篇", next: "下一篇" },
      },
    },
    // VitePress treats locale keys as patterns and omits underscore-prefixed keys from client data.
    "[_]en": {
      lang: "en-US",
      link: "/_en/",
      description: "Some CSS tricks, some common CSS styles.",
      themeConfig: { sidebar: sidebars["/_en/"] },
    },
  },
  themeConfig: {
    siteTitle: false,
    nav: [
      { text: "js tricks", link: "https://qishaoxuan.github.io/js_tricks/" },
      { text: "blog", link: "https://qishaoxuan.github.io/blog/" },
      { text: "GitHub", link: repo },
    ],
    search: { provider: "local" },
  },
  vite: {
    resolve: { alias: { "@docs": docsDir } },
  },
});
