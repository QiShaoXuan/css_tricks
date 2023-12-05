import { defaultLang, config } from "./config";

export default function i18n(str) {
  if(this.$lang === defaultLang){
    return str
  }

  if (config[str]) {
    return typeof config[str] === "object"
      ? config[str][this.$lang]
      : config[str];
  }

  return str;
}
