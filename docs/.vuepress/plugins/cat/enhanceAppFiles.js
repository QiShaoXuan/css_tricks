import Cat from "./cat.vue";

export default ({ Vue, router }) => {
  Vue.component("Cat", Cat);
  router.afterEach(function (to) {
    ga('set', 'page', to.fullPath)
    ga('send', 'pageview')
  })
};
