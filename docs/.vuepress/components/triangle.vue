<style scoped lang="scss">
  .triangle-container{
    .panel{
      box-sizing: border-box;
      height:200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .border-triangle{
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 50px 50px 50px;
      position:relative;
      border-color: transparent transparent #fff transparent;
      &::before{
        content:'';
        border-style: solid;
        border-width: 0 52px 52px 52px;
        border-color: transparent transparent #409eff transparent;
        position: absolute;
        left:-52px;top:-1px;
        z-index: -1;
      }
    }
  }

</style>

<template>
  <div class="triangle-container">
    <div class="panel">
      <div class="border-triangle"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {}
    }
  }
</script>
