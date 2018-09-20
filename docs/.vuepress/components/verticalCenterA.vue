<style scoped lang="scss">
.parentElement {
  position: relative;
<<<<<<< HEAD
  background: blue;
  width: 100%;
  height: 100px;
  .childElement {
    background: yellow;
=======
  background: #eeeeee;
  width: 100%;
  height: 100px;
  .childElement {
    background: #bfbfbf;
>>>>>>> Soulkey-edit
    width: 20%;
    height: 30%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    // top: 0;
    // bottom: 0;
    // margin: auto;
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
