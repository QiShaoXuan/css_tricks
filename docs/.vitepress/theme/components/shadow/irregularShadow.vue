<style scoped lang="scss">
.shadow-container {
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  .panel {
    box-sizing: border-box;
    width: 49%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .shadow-triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 50px 50px 50px;
    border-color: transparent transparent #00adb5 transparent;
    filter: drop-shadow(10px 0px 10px rgba(0, 173, 181, 0.5));
  }
  .shadow-dotted {
    width: 120px;
    height: 120px;
    border: 6px dotted #00adb5;
    filter: drop-shadow(2px 2px 2px rgba(0, 173, 181, 0.9));
  }
  .circle-square {
    width: 120px;
    height: 120px;
    background: radial-gradient(
      circle at bottom right,
      transparent 49px,
      #00adb5 34px
    );
    filter: drop-shadow(2px 2px 2px rgba(0, 173, 181, 0.9));
  }
  .tip {
    width: 140px;
    height: 80px;
    border: 1px solid #00adb5;
    border-radius: 4px;
    position: relative;
    background-color: #fff;
     filter: drop-shadow(0px 2px 4px rgba(0, 173, 181, 0.9));
    &::before {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent #fff transparent;
      position: absolute;
      top: -10px;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 2;
    }
    &::after {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent #00adb5 transparent;
      position: absolute;
      top: -11px;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 1;
    }
  }
}
</style>

<template>
  <div class="shadow-container">
    <div class="panel">
      <div class="shadow-dotted"></div>
    </div>
     <div class="panel">
      <div class="shadow-triangle"></div>
    </div>
    <div class="panel">
      <div class="circle-square"></div>
    </div>
    <div class="panel">
      <div class="tip"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>
