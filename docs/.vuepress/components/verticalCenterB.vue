<style scoped lang="scss">
.parentElement {
<<<<<<< HEAD
  background: blue;
=======
  background: #eeeeee;
>>>>>>> Soulkey-edit
  width: 100%;
  height: 100px;
  display: table;
  .childElement {
    // background: yellow;
    width: 20%;
    height: 30%;
    display: table-cell;
    vertical-align: middle;
<<<<<<< HEAD
    color: #fff;
=======
    // color: #fff;
>>>>>>> Soulkey-edit

  }
  // .grandsonElement {
  //   color: red;
  //   width: 20%;
  //   height: 30%;
  // }
}
</style>

<template>
  <div class="parentElement">
    <div class="childElement">
      childElement内容
      <div class="grandsonElement">grandsonElement内容</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "verticalCenterB",
  data() {
    return {};
  }
};
</script>
