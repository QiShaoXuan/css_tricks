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
    --left: 0;
    --top: calc(100% - 30px);
    transition: left 0.5s ease-in, top 0.5s ease-out;
    &.active {
      left: var(--left);
      top: var(--top);
    }
  }
  .placehloder{
    position: absolute;
    left:0;right:0;
    top:0;bottom:0;
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color:#ddd;
  }
}
</style>

<template>
  <div class="parabola-container" @click="containerClick">
    <div class="placehloder">click panel to animate</div>
    <div class="parabola-item" ref="parabolaItem" :class="{active:isActive}"></div>
  </div>
</template>

<script>
export default {
  name: "parabola",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    containerClick(e) {
      let rect = e.target.getBoundingClientRect();
      let offsetX = e.pageX - rect.left - window.pageXOffset;
      let offsetY = e.pageY - rect.top - window.pageYOffset;

      this.$refs["parabolaItem"].style.setProperty("--left", `${offsetX}px`);
      this.$refs["parabolaItem"].style.setProperty("--top", `${offsetY}px`);

      this.isActive = true;
    }
  }
};
</script>
