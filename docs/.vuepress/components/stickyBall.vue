<style scoped lang="scss">
.effect {
  width: 100%;
  height: 100%;
  padding-top: 50px;
  filter: blur(10px) contrast(30);
  /*filter:contrast(10);*/
  background: #fff;
}
.blackball {
  width: 100px;
  height: 100px;
  background: black;
  padding: 10px;
  border-radius: 50%;
  margin: 0 auto;
  z-index: 1;
}
.redball {
  width: 60px;
  height: 60px;
  background: #f00;
  padding: 10px;
  border-radius: 50%;
  position: absolute;
  top: 70px;
  left: 50px;
  z-index: 2;
  left: 50%;
  /*animation:rball 16s infinite;*/
}
@keyframes rball {
  0%,
  100% {
    left: 35px;
    width: 60px;
    height: 60px;
  }
  4%,
  54% {
    width: 60px;
    height: 60px;
  }
  10%,
  60% {
    width: 50px;
    height: 70px;
  }
  20%,
  70% {
    width: 60px;
    height: 60px;
  }
  34%,
  90% {
    width: 70px;
    height: 50px;
  }
  41% {
    width: 60px;
    height: 60px;
  }
  50% {
    left: calc(100% - 95px);
    width: 60px;
    height: 60px;
  }
}

.blurfield {
  display: flex;
  justify-content: center;
  align-items: center;
  filter: blur(10px) contrast(30);
}
.ball1,
.ball2 {
  background: red;
  width: 80px;
  height: 80px;
  animation: ball 10s infinite;
  border-radius: 100%;
}
.ball2 {
  background: blue;
  animation-delay: -2s;
}
@keyframes ball {
  0% {
    transform: translateX(-100px);
  }

  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(-100px);
  }
}
</style>

<template>
 <div class="sticky-container">
   <div class="blurfield">
     <div class="ball1"></div>
     <div class="ball2"></div>
   </div>
   <!--<div class="effect">-->
     <!--<div class="blackball"></div>-->
     <!--<div class="redball"></div>-->
   <!--</div>-->
 </div>

</template>

<script>
export default {
  name: "sticky-ball",
  data() {
    return {};
  }
};
</script>
