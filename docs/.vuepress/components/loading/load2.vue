<style scoped lang="scss">
.load-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 150px;
}

#load {
  width: 75px;
  animation: loading 3s linear infinite;
  #loading-inner {
    stroke: {
      dashoffset: 0;
      dasharray: 300;
      width: 10;
      miterlimit: 10;
      linecap: round;
    }
    animation: loading-circle 2s linear infinite;
    stroke: #00adb5;
    fill: transparent;
  }
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading-circle {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -600;
  }
}
</style>

<template>
<div class="load-container">
  <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
    <circle id="loading-inner" cx="75" cy="75" r="60"/>
 </svg>
</div>
</template>

<script>
export default {
  name: "load2",
  data() {
    return {};
  }
};
</script>
