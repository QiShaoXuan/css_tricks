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
    // height: 100px;
    span {
      display: inline-block;
      padding-bottom: 3px;
    }
  }
  .flex-start,
  .flex-end,
  .center,
  .space-around,
  .space-between,
  .stretch {
    display: flex;
    border: 1px solid #99a9c0;
    margin-bottom: 20px;
    height: 100px;
    flex-wrap: wrap;
    div {
      width: 40px;
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
    align-content: flex-start;
  }
  .flex-end {
    align-content: flex-end;
  }
  .center {
    align-content: center;
  }
  .space-around {
    align-content: space-around;
  }
  .space-between {
    align-content: space-between;
  }
  .stretch {
    align-content: stretch;
  }
}
</style>

<template>
  <div class="container">
    <div>
      <span>align-content：flex-start</span>
      <div class="flex-start">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
    <div>
      <span>align-content：flex-end</span>
      <div class="flex-end">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
    <div>
      <span>align-content：center</span>
      <div class="center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
    <div>
      <span>align-content：space-around </span>
      <div class="space-around ">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
    <div>
      <span>align-content：space-between</span>
      <div class="space-between">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
    <div>
      <span>align-content：stretch</span>
      <div class="stretch">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "flexAlignContent",
  data() {
    return {};
  }
};
</script>
