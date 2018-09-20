<style scoped lang="scss">
.parentElement {
  background: #eee;
  width: 100%;
  height: 100px;
  display: table;
  .childElement {
    width: 20%;
    height: 30%;
    display: table-cell;
    vertical-align: middle;

  }
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
