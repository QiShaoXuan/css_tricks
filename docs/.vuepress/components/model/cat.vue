<style scoped lang="scss">
.cat-container{
  position: fixed;
  right:50px;
  bottom:100px;
  color:#00adb5;
}
</style>

<template>
<div class="cat-container" v-show="isLoaded">一只猫正在赶来 ~</div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        isLoaded:true,
        model:{
          cat:'https://qishaoxuan.github.io/liveModel/live2d-widget-model-hijiki/assets/hijiki.model.json',
        }
      }
    },
    mounted() {
      const body = document.querySelector("body");

      const script = document.createElement("script");
      script.src = "https://qishaoxuan.github.io/liveModel/L2Dwidget.min.js";
      body.appendChild(script);

      script.onload = () => {
        this.isLoaded = false
        console.log('找猫? 在这里 https://github.com/xiazeyu/live2d-widget.js')
        console.log('感谢作者 ~')
        L2Dwidget.init({
          model: {
            jsonPath: this.model.cat,
          },
          display: {
            superSample: 2,
            width: 120,
            height: 150,
            position: 'right',
            hOffset: 0,
            vOffset: -20,
          },
          mobile: {
            show: true,
            scale: 0.5,
            motion: true,
          },
          react: {
            opacityDefault: 0.9,
            opacityOnHover: 0.2,
          },
        });
      }
    }
  }
</script>
