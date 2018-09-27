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
  .baseline,
  .stretch {
    display: flex;
    border: 1px solid #99a9c0;
    margin-bottom: 20px;
    height: 60px;
    div {
      width: 40px;
      // height: 20px;
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
    align-items: flex-start;
  }
  .flex-end {
    align-items: flex-end;
  }
  .center {
    align-items: center;
  }
  .baseline {
    align-items: baseline;
    height: 90px;;
    div {
      height: 40px;
      &:first-child {
        height: 30px;
        align-items: flex-start;
      }
      &:last-child {
        height: 50px;
        align-items: flex-end;
      }
    }
  }
  .stretch {
    align-items: stretch;
  }
}
</style>

<template>
  <div class="container">
    <div>
      <span>align-items：flex-start</span>
      <div class="flex-start">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
    <div>
      <span>align-items：flex-end</span>
      <div class="flex-end">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
    <div>
      <span>align-items：center</span>
      <div class="center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>

    <div>
      <span>align-items：stretch</span>
      <div class="stretch">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
    <div>
      <span>align-items：baseline</span>
      <div class="baseline">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "flexAlignItems",
  data() {
    return {};
  }
};
</script>
