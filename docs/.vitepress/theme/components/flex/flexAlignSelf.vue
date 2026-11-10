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
    height: 70px;
    justify-content: center;
    align-items: center;
    div {
      width: 100px;
      height: 40px;
      background-color: #e5e9f2;
      margin: 0 5px;
      text-align: center;
      color: #8a96b1;
      font-size: 10px;
    }
  }
  .flex-start {
    :first-child {
      align-self: flex-start;
    }
  }
  .flex-end {
    :first-child {
      align-self: flex-end;
    }
  }
  .center {
    align-items: flex-start;
    :first-child {
      align-self: center;
    }
  }
  .baseline {
    :first-child {
      height: 60px;
      align-self: baseline;
    }
    :last-child {
      height: 40px;
      align-self: baseline;
    }
    // height: 90px;
    div {
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      // &:first-child {
      //   height: 30px;
      //   align-items: flex-start;
      // }
      // &:last-child {
      //   height: 50px;
      //   align-items: flex-end;
      // }
    }
  }
  .stretch {
    div {
      height: auto;
    }
    :first-child {
      align-self: stretch;
    }
  }
}
</style>

<template>
  <div class="container">
    <div>
      <span>align-self：flex-start</span>
      <div class="flex-start">
        <div>align-self：flex-start</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
    <div>
      <span>align-self：flex-end</span>
      <div class="flex-end">
        <div>align-self：flex-end</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
    <div>
      <span>align-self：center</span>
      <div class="center">
        <div>align-self：center</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>

    <div>
      <span>align-self：stretch</span>
      <div class="stretch">
        <div>align-self：stretch</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
    <div>
      <span>align-self：baseline</span>
      <div class="baseline">
        <div>align-self: baseline;</div>
        <div>2</div>
        <div>align-self: baseline;</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "flexAlignSelf",
  data() {
    return {};
  }
};
</script>
