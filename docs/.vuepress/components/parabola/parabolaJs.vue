<style scoped lang="scss">
.parabola-container {
  position: relative;
  height: 400px;
  border: 1px solid #eee;
  .parabola-item {
    width: 30px;
    height: 30px;
    background: #00adb5;
    position: absolute;
    left: 0;
    top: calc(100% - 30px);
  }
  .click-point {
    width: 2px;
    height: 2px;
    position: absolute;
    left: 0;
    top: 0;
    background: #00adb5;
  }
}
</style>

<template>
  <div class="parabola-container" @click="containerClick">
    <div class="parabola-item" ref="parabolaItem"></div>
    <div class="click-point" ref="point"></div>
  </div>
</template>

<script>
import funParabola from "../../public/scripts/parabola.js";
export default {
  name: "parabolaJs",
  data() {
    return {
      parabola: null
    };
  },
  methods: {
    containerClick(e) {
      let rect = e.target.getBoundingClientRect();
      let offsetX = e.pageX - rect.left - window.pageXOffset;
      let offsetY = e.pageY - rect.top - window.pageYOffset;

      this.$refs["point"].style.setProperty("left", `${offsetX}px`);
      this.$refs["point"].style.setProperty("top", `${offsetY}px`);

      let parabola = funParabola(
        this.$refs["parabolaItem"],
        this.$refs["point"],
        {
          speed: 166.67 * 3,
          endScale: 0.4
        }
      ).init();
    }
  }
};
</script>
