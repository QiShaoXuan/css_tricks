<style scoped lang="scss">
.flash-container {
  width: 300px;
  height: 500px;
  background: #333333;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::after{
    content:'';
    height: 150%;
    width: 15px;
    background: #fff;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    filter: blur(6px);
    animation: move 1.5s infinite ease-in;
  }
}

@keyframes move {
  0% {
    opacity: 0;
    transform: translate(-200px, -200px) rotate(45deg);
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate(200px, 200px) rotate(45deg);
  }
  100% {
    opacity: 0;
    transform: translate(200px, 200px) rotate(45deg);
  }
}
</style>

<template>
  <div class="flash-container">
    <img :src="require('../public/images/bg7.jpeg')" alt="">
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
