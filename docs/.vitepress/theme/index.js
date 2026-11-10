import DefaultTheme from "vitepress/theme";
import { inBrowser, useData } from "vitepress";
import { defineAsyncComponent } from "vue";
import { ElButton } from "element-plus/es/components/button/index.mjs";
import { ElCheckbox } from "element-plus/es/components/checkbox/index.mjs";
import { ElColorPicker } from "element-plus/es/components/color-picker/index.mjs";
import { ElIcon } from "element-plus/es/components/icon/index.mjs";
import { ElInput } from "element-plus/es/components/input/index.mjs";
import { ElInputNumber } from "element-plus/es/components/input-number/index.mjs";
import { ElRadio, ElRadioGroup } from "element-plus/es/components/radio/index.mjs";
import { ElSlider } from "element-plus/es/components/slider/index.mjs";
import { ElSwitch } from "element-plus/es/components/switch/index.mjs";
import { ElTag } from "element-plus/es/components/tag/index.mjs";
import { ElTooltip } from "element-plus/es/components/tooltip/index.mjs";
import { ID_INJECTION_KEY } from "element-plus/es/hooks/use-id/index.mjs";
import { ZINDEX_INJECTION_KEY } from "element-plus/es/hooks/use-z-index/index.mjs";
import "element-plus/theme-chalk/base.css";
import "element-plus/theme-chalk/el-button.css";
import "element-plus/theme-chalk/el-checkbox.css";
import "element-plus/theme-chalk/el-color-picker.css";
import "element-plus/theme-chalk/el-color-picker-panel.css";
import "element-plus/theme-chalk/el-input.css";
import "element-plus/theme-chalk/el-input-number.css";
import "element-plus/theme-chalk/el-popper.css";
import "element-plus/theme-chalk/el-radio.css";
import "element-plus/theme-chalk/el-radio-group.css";
import "element-plus/theme-chalk/el-slider.css";
import "element-plus/theme-chalk/el-switch.css";
import "element-plus/theme-chalk/el-tag.css";
import "element-plus/theme-chalk/el-tooltip.css";
import "prismjs/themes/prism-tomorrow.css";
import { elementIdPrefix } from "../element-ssr.mjs";
import DemoCopy from "./DemoCopy.vue";
import Layout from "./Layout.vue";
import translate from "./i18n/index.js";
import "./style.css";

const demos = import.meta.glob("./components/**/*.vue");
const controls = [
  ElButton, ElCheckbox, ElColorPicker, ElIcon, ElInput, ElInputNumber,
  ElRadio, ElRadioGroup, ElSlider, ElSwitch, ElTag, ElTooltip,
];

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    app.provide(ID_INJECTION_KEY, { prefix: elementIdPrefix, current: 0 });
    app.provide(ZINDEX_INJECTION_KEY, { current: 0 });
    for (const [file, load] of Object.entries(demos)) {
      const name = file.slice("./components/".length, -".vue".length).replaceAll("/", "-");
      app.component(name, defineAsyncComponent(load));
    }
    for (const control of controls) app.use(control);
    app.component("DemoCopy", DemoCopy);

    const { lang } = app.runWithContext(useData);
    Object.defineProperty(app.config.globalProperties, "$lang", { get: () => lang.value });
    app.config.globalProperties.__ = translate;

    if (inBrowser) {
      const root = document.documentElement;
      router.onBeforePageLoad = () => { root.classList.add("route-loading"); };
      router.onAfterRouteChange = () => { root.classList.remove("route-loading"); };
    }
  },
};
