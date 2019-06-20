import ElementUI from 'element-ui'
import './public/styles/element-variables.scss'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(ElementUI)
}


// p override.styl has been deprecated from v1.0.0, using .vuepress/styles/palette.styl instead.
