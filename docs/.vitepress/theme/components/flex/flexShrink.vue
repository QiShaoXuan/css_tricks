<style scoped lang="scss">
.container {
  width: 100%;
  margin: 30px auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 40px;
  box-sizing: border-box;
  > div {
    width: 48%;
    span {
      display: inline-block;
      padding-bottom: 3px;
    }
  }
  .wrap {
    display: flex;
    border: 1px solid #99a9c0;
    margin-bottom: 20px;
    width: 200px;
    div {
      // width: 200px;
      flex-basis:200px;
      height: 60px;
      background-color: #e5e9f2;
      margin: 5px;
      text-align: center;
      color: #8a96b1;
      // flex-basis: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .flex-shrink {
    :first-child {
      flex-shrink: 1;
    }
    :last-child {
      flex-shrink: 2;
    }
  }
}
</style>

<template>
  <div class="container">
    <div>
      <span>子容器未加flex-shrink</span>
      <div class="wrap">
        <div>1</div>
        <div>2</div>
      </div>
    </div>
    <div>
      <span>子容器flex-shrink:1,flex-shrink:2</span>
      <div class="wrap flex-shrink">
        <div>1</div>
        <div>2</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "flexShrink",
  data() {
    return {};
  }
};
</script>
