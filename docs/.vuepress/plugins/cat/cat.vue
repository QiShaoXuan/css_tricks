<style scoped lang="scss">
.cat-container {
  position: fixed;
  right: 50px;
  bottom: 100px;
  color: #00adb5;
}
</style>

<template>
  <div class="cat-container" v-show="isLoaded">一只猫正在赶来 ~</div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isLoaded: true,
      model: {
        blackCat:
          "https://qishaoxuan.github.io/live2DModel/live2d-widget-model-hijiki/assets/hijiki.model.json",
        whiteCat:
          "https://qishaoxuan.github.io/live2DModel/live2d-widget-model-tororo/assets/tororo.model.json"
      }
    };
  },
  mounted() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.isLoaded = false;
      return console.log("mobile do not load model");
    }

    const body = document.querySelector("body");

    const script = document.createElement("script");
    script.src = "https://qishaoxuan.github.io/live2DModel/L2Dwidget.min.js";
    body.appendChild(script);

    script.onload = () => {
      this.isLoaded = false;

      L2Dwidget.init({
        model: {
          jsonPath:
            Math.random() > 0.5 ? this.model.blackCat : this.model.whiteCat
        },
        display: {
          superSample: 2,
          width: (80 / 1424) * document.body.clientWidth,
          height: ((80 / 1424) * document.body.clientWidth) / 0.8,
          position: "right",
          hOffset: 0,
          vOffset: -20
        },
        mobile: {
          show: true,
          scale: 1,
          motion: true
        },
        react: {
          opacityDefault: 0.9,
          opacityOnHover: 0.2
        }
      });
    };
  }
};
</script>
