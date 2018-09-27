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
  .flex-start,
  .flex-end,
  .center,
  .space-between,
  .space-around {
    display: flex;
    border: 1px solid #99a9c0;
    margin-bottom: 20px;

    div {
      width: 40px;
      height: 60px;
      background-color: #e5e9f2;
      margin: 5px;
      text-align: center;
      color: #8a96b1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .flex-start {
    justify-content: flex-start;
  }
  .flex-end {
    justify-content: flex-end;
  }
  .center {
    justify-content: center;
  }
  .space-between {
    justify-content: space-between;
  }
  .space-around {
    justify-content: space-around;
  }
}
</style>

<template>
  <div class="container">
    <div>
      <span>justify-content：flex-start</span>
      <div class="flex-start">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
    <div>
      <span>justify-content：flex-end</span>
      <div class="flex-end">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
    <div>
      <span>justify-content：center</span>
      <div class="center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>

    <div>
      <span>justify-content：space-between</span>
      <div class="space-between">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
    <div>
      <span>justify-content：space-around</span>
      <div class="space-around">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "flexJustifyContent",
  data() {
    return {};
  }
};
</script>
