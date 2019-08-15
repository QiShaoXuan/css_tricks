import ElementUI from "element-ui";
import i18n from "./i18n/index";
import "./public/styles/element-variables.scss";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(ElementUI);
  Vue.prototype.__ = i18n;
};
