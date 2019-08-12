<style lang="scss">
.copy-btn {
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
  position: absolute;
  right: 2em;
  top: 0.8em;
  cursor: pointer;
  z-index: 10;
  line-height: 16px;
  user-select: none;
}
.extra-class {
  &::before {
    display: none;
  }
}
.copy-message {
  min-width: 100px;
}
</style>

<template></template>

<script>
import ClipboardJS from "clipboard";
import { Message } from "element-ui";
export default {
  name: "Copy",
  data() {
    return {};
  },
  mounted() {
    this.initCopyBtn();
    this.$router.afterEach((to, from) => {
      if (to.path !== from.path) {
        this.initCopyBtn();
      }
    });
  },
  methods: {
    initCopyBtn() {
      setTimeout(() => {
        const containers = document.querySelectorAll(".extra-class");
        [].forEach.call(containers, (container, index) => {
          const pre = container.querySelector("pre");
          if (!pre) {
            return;
          }
          const lang = this.getLanguage(container.classList);
          const id = `${lang}-${index}`;
          const btnID = `${id}-btn`;
          const btn = document.createElement("div");

          container.setAttribute("id", id);

          btn.classList.add("copy-btn");
          btn.setAttribute("id", btnID);
          btn.setAttribute("data-clipboard-action", "copy");
          btn.setAttribute("data-clipboard-target", `#${id}`);
          btn.innerText = `复制 ${lang}`;
          container.insertBefore(btn, pre);
        });

        const btns = document.querySelectorAll(".copy-btn");
        var clipboard = new ClipboardJS(btns);
        clipboard.on("success", function(e) {
          Message({
            message: "复制成功",
            type: "success",
            center: true,
            customClass: "copy-message"
          });
        });

        clipboard.on("error", function(e) {
          Message({
            message: "复制失败，请手动复制",
            type: "error",
            center: true,
            customClass: "copy-message"
          });
        });
      }, 500);
    },
    getLanguage(classList) {
      const langClassName = [].filter.call(
        classList,
        v => v.indexOf("language") !== -1
      )[0];

      if (langClassName) {
        return langClassName.replace("language-", "");
      }

      return "";
    }
  }
};
</script>
