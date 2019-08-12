<style scoped lang="scss">
.cat-container {
  position: fixed;
  right: 50px;
  bottom: 100px;
  color: #00adb5;

  #vuepress-cat {
    position: fixed;
    opacity: 0.9;
    right: 0px;
    bottom: -20px;
    z-index: 99999;
    pointer-events: none;
  }
}
</style>

<template>
  <div class="cat-container" v-show="isLoaded">
    <canvas
      id="vuepress-cat"
      :width="style.width"
      :height="style.height"
      class="live2d"
    ></canvas>
  </div>
</template>

<script>
import live2dJSString from "./live2d";
export default {
  name: "cat",
  data() {
    return {
      isLoaded: true,
      model: {
        blackCat:
          "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-hijiki/assets/hijiki.model.json",
        whiteCat:
          "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/tororo.model.json"
      },
      style: {
        width: 280,
        height: 250
      }
    };
  },
  mounted() {
    this.initCat();

    this.$router.afterEach((to, from) => {
      if (to.path !== from.path) {
        this.initCat();
      }
    });
  },
  methods: {
    initCat() {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? true
        : false;
      if (isMobile) {
        this.isLoaded = false;
        return console.log("mobile do not load model");
      }

      if (!window.loadlive2d) {
        const script = document.createElement("script");
        script.innerHTML = live2dJSString;
        document.body.appendChild(script);
      }

      this.style = {
        width: (150 / 1424) * document.body.clientWidth,
        height: ((150 / 1424) * document.body.clientWidth) / 0.8
      };

      setTimeout(() => {
        loadlive2d(
          "vuepress-cat",
          Math.random() > 0.5 ? this.model.blackCat : this.model.whiteCat
        );

        console.clear()
        // console.log('找猫')

      });
    }
  }
};
</script>
