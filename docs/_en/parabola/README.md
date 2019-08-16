:::tip
Parabolic animations are often used to add favorites to animations
:::

## CSS

:::tip
The velocity difference of 'ease-in' and 'ease-out' is used to achieve parabolic effect
:::

<parabola-parabolaCss/>

```vue
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
}
</style>

<template>
  <div class="parabola-container" @click="containerClick">
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
```

## JS

:::tip
`parabola.js` function is from  <a href="https://github.com/QiShaoXuan/parabola">https://github.com/QiShaoXuan/parabola</a>，here is a simple example
:::

<parabola-parabolaJs/>

```vue
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
```
