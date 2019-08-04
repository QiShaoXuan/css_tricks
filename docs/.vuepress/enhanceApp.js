import ElementUI from "element-ui";
import "./public/styles/element-variables.scss";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(ElementUI);
  // const pres = document.querySelectorAll("pre");
  // [].forEach.call(pres, pre => {
  //   console.log('pre.firstChild,',pre.firstChild)
  //
  //   if (pre.firstChild && pre.firstChild.tagName === "CODE") {
  //     console.log('pre',pre)
  //
  //   }
  // });

  // let observer = new MutationObserver(function(mutations, observer) {
  //   mutations.forEach(function(mutation) {
  //     if (
  //       mutation.addedNodes[0] &&
  //       mutation.addedNodes[0].nodeType === 1 &&
  //       mutation.addedNodes[0].getAttribute("id") === "app"
  //     ) {
  //       setTimeout(() => {
  //         const pres = document.querySelectorAll("pre");
  //         console.log("hello",pres);
  //       })
  //     }
  //   });
  // });
  //
  // var body = document.querySelector("body");
  //
  // observer.observe(body, {
  //   childList: true, // 子节点的变动（指新增，删除或者更改）
  //   attributes: false, // 属性的变动
  //   characterData: true, // 节点内容或节点文本的变动
  //   subtree: false, // 是否将该观察器应用于该节点的所有后代节点
  //   attributeOldValue: false, // 观察attributes变动时，是否需要记录变动前的属性值
  //   characterDataOldValue: false // 表示观察characterData变动时，是否需要记录变动前的值
  // });
};

// p override.styl has been deprecated from v1.0.0, using .vuepress/styles/palette.styl instead.
