<style lang="scss" scoped>
.container {
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.color-shadow {
  position: relative;
  width: 200px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    object-fit: cover;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: url(../public/images/bg11.jpg) no-repeat center/cover;
    filter: blur(10px) brightness(80%) opacity(0.8);
    transform: scale(0.95);
    z-index: 1;
  }
}
</style>

<template>
  <div class="container">
    <div class="color-shadow">
      <img src="../public/images/bg11.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "color-shadow",
  data() {
    return {};
  }
};
</script>
