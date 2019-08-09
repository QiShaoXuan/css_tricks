const CONFIG = require("../../../../config");

export default function initComment() {
  if (location.host.indexOf("localhost") !== -1) {
    return;
  }

  const body = document.querySelector(".gitalk-container");
  const script = document.createElement("script");

  script.src = "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js";
  body.appendChild(script);
  script.onload = () => {
    const commentConfig = Object.assign(CONFIG.gitalk, {
      id: window.location.pathname
    });
    const gitalk = new Gitalk(commentConfig);
    gitalk.render("gitalk-container");
  };
}
