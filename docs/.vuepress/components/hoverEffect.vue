<template>
  <div class="btn-container">
    <div class="button">
      <div class="content">hover me to change</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hoverEffect",
};
</script>

<style scoped lang="scss">
.btn-container {
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    width: 200px;
    height: 60px;
    border-radius: 30px;
    background: #00adb5;
    color: #fff;
    position: relative;
    cursor: pointer;
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 2;
    }
    &::after {
      content: attr(aria-controls);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      border-radius: 30px;
      background: #00adb5;
      color: #fff;
      transform-origin: center center;
    }
    &:hover {
      animation: hover 0.15s ease-in-out 1;
      &::after {
        animation: shadow 0.4s ease-in-out 1;
      }
    }
  }
}

@keyframes shadow {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

@keyframes hover {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
</style>
