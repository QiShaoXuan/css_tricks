<style scoped lang="scss">
.parentElement {
  position: relative;
  background: #eeeeee;
  width: 100%;
  height: 100px;
  .childElement {
    background: #bfbfbf;
    width: 20%;
    height: 30%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>

<template>
  <div class="parentElement">
    <div class="childElement"></div>
  </div>
</template>

<script>
export default {
  name: "verticalCenterA",
  data() {
    return {};
  }
};
</script>
