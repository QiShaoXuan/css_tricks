<style scoped lang="scss">
  .triangle-container{
    height:400px;
    .panel{
      box-sizing: border-box;
      width:49%;
      height:49%;
      display: inline-flex;
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
    .shadow-triangle{
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 50px 50px 50px;
      border-color: transparent transparent #409eff transparent;
      filter:drop-shadow(10px 0px 10px  rgba(39,92,171,0.5));
    }
    .shadow-dotted{
      width:120px;
      height:120px;
      border: 6px dotted #409eff;
      filter: drop-shadow(2px 2px 2px rgba(64,158,225,.9));
    }
    .circle-square{
      width:120px;
      height:120px;
      background: radial-gradient(circle at bottom right, transparent 49px, #409eff 34px);
      filter: drop-shadow(2px 2px 2px rgba(64,158,225,.9));
    }
  }

</style>

<template>
  <div class="triangle-container">
    <div class="panel">
      <div class="border-triangle"></div>
    </div>
    <div class="panel">
      <div class="shadow-triangle"></div>
    </div>
    <div class="panel">
      <div class="shadow-dotted"></div>
    </div>
    <div class="panel">
      <div class="circle-square"></div>
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
