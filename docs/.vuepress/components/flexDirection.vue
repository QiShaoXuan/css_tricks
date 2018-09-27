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
  .row,
  .column,
  .row-reverse,
  .column-reverse {
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
  .row {
    flex-direction: row;
  }
  .column {
    flex-direction: column;
  }
  .row-reverse {
    flex-direction: row-reverse;
  }
  .column-reverse {
    flex-direction: column-reverse;
  }
}
</style>

<template>
  <div class="container">
    <div>
      <span>flex-direction：row</span>
      <div class="row">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
    <div>
      <span>flex-direction：row-reverse</span>
      <div class="row-reverse">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
    <div>
      <span>flex-direction：column</span>
      <div class="column">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>

    <div>
      <span>flex-direction：column-reverse</span>
      <div class="column-reverse">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "flexDirection",
  data() {
    return {};
  }
};
</script>
