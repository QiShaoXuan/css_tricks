<style scoped lang="scss">
.parabola-container {
  position: relative;
  height: 400px;
  border: 1px solid #eee;
}
</style>

<template>
  <div class="parabola-container">
    <div class="parabola-item" ref="parabolaItem"></div>
  </div>
</template>

<script>
import funParabola from '../../public/scripts/parabola.js'
export default {
  name: "parabolaJs",
  data() {
    return {};
  },
  methods: {},
  mounted() {
// var parabola = funParabola(element, target).mark();
  }
};
</script>
