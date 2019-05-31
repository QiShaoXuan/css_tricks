<style lang="scss" scoped>
  .ripple-container{
    height:400px;
  }
  .wave{
    position:absolute;
    top:calc((100% - 30px)/2);
    left:calc((100% - 30px)/2);
    width:30px;
    height:30px;
    border-radius:300px;
    background:url(../../public/images/bg1.jpg);
    background-attachment:fixed;
    background-position:center center;
  }
  .wave0{
    z-index:2;
    background-size:auto 106%;
    animation:w 1s forwards;
  }
  .wave1{
    z-index:3;
    background-size:auto 102%;
    animation:w 1s .2s forwards;
  }
  .wave2{
    z-index:4;
    background-size:auto 104%;
    animation:w 1s .4s forwards;
  }
  .wave3{
    z-index:5;
    background-size:auto 101%;
    animation:w 1s .5s forwards;
  }
  .wave4{
    z-index:6;
    background-size:auto 102%;
    animation:w 1s .8s forwards;
  }
  .wave5{
    z-index:7;
    background-size:auto 100%;
    animation:w 1s 1s forwards;
  }
  @keyframes w{
    0%{
      top:calc((100% - 30px)/2);
      left:calc((100% - 30px)/2);
      width:30px;
      height:30px;
    }
    100%{
      top:calc((100% - 300px)/2);
      left:calc((100% - 300px)/2);
      width:300px;
      height:300px;
    }
  }
</style>

<template>
<div class="ripple-container">
  <div class="wave wave5" ></div>
  <div class="wave wave4"></div>
  <div class="wave wave3"></div>
  <div class="wave wave2"></div>
  <div class="wave wave1"></div>
  <div class="wave wave0"></div>
</div>
</template>

<script>
  export default {
    name: 'scssWave',
    data() {
      return {}
    }
  }
</script>
