<style scoped lang="scss">
.container {
  width: 100%;
  // height: 100px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid black;
  .wrap {
    display: flex;
    border: 1px solid #99a9c0;
    margin: 20px;
    width: 60%;
    height: 80%;
    padding: 5px;
    div {
      width: 40px;
      height: 60px;
      background-color: #e5e9f2;
      margin: 5px;
      text-align: center;
      color: #8a96b1;
      display: flex;
      justify-content: center;
      align-items: center
    }
  }
}
</style>

<template>
  <div class="container">
    <div class="wrap">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flexbox",
  data() {
    return {};
  }
};
</script>
