<style scoped lang="scss">
.position-container {
  height: 200px;
  position: relative;
  .hover-item {
    width: 30px;
    height: 30px;
    background: #fff;
    border: 8px solid #00adb5;
    color: #00adb5;
    border-radius: 50%;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50px;
    margin: auto;
  }
  .tip {
    padding: 5px 14px;
    border: 1px solid #00adb5;
    border-radius: 21px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;
    white-space: nowrap;
    background-color: #fff;
    font-size: 16px;
    color: #00adb5;
    &::before {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 10px 0 10px;
      border-color: #fff transparent transparent transparent;
      position: absolute;
      bottom: -10px;
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
      border-width: 10px 10px 0 10px;
      border-color: #00adb5 transparent transparent transparent;
      position: absolute;
      bottom: -11px;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 1;
    }
  }
}
</style>
<template>
  <div class="position-container">
    <div class="hover-item">
      <div class="tip">
        <div>列缺霹靂，丘巒崩摧。洞天石扉，訇然中開</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottomTemp",
  data() {
    return {};
  }
};
</script>


