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
  .wrap,
  .nowrap,
  .wrap-reverse {
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
  .wrap {
    flex-wrap: wrap;
  }
  .nowrap {
    flex-wrap: nowrap;
  }
  .wrap-reverse {
    flex-wrap: wrap-reverse;
  }
}
</style>

<template>
  <div class="container">
    <div>
      <span>flex-wrap：wrap</span>
      <div class="wrap">
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
      <span>flex-wrap：wrap-reverse</span>
      <div class="wrap-reverse">
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
      <span>flex-wrap：nowrap</span>
      <div class="nowrap">
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
  name: "flexWrap",
  data() {
    return {};
  }
};
</script>
