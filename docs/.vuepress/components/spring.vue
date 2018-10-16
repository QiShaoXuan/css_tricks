<style scoped lang="stylus">
.spring-container {
  section {
    margin-bottom: 30px;
    height: 50px;
    position: relative;
  }
}

// 弹跳函数
spring-wobbly(t)
  return -0.5 * (2.71828 ** (-6 * t)) * (-2 * (2.71828 ** (6 * t)) + sin(12 * t) + 2 * cos(12 * t))

// 线性函数
lerp($a, $b, $p)
  return $a + $p * ($b - $a)

@keyframes moveLeft {
  for i in (0 .. 100) {
    {i + '%'} {
      left: lerp(0, 200px, spring-wobbly(i / 100))
    }
  }
}

@keyframes scale {
  for i in (0 .. 100) {
    {i + '%'} {
      transform: scale(lerp(.3, 1, spring-wobbly(i / 100)),lerp(.3, 1, spring-wobbly(i / 100)));
    }
  }
}

h1 {
  text-align: center;
  font-size: 40px;
  animation: 1.5s scale linear infinite;
  margin: 0;
  line-height: 50px;
}


.moveBox {
  width: 30px;
  height: 30px;
  background-color: #00adb5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  animation: 2s moveLeft linear infinite;
  margin: auto;
}
</style>

<template>
<div class="spring-container">
  <section>
    <h1>弹簧动画</h1>
  </section>
  <section>
    <div class="moveBox"></div>
  </section>
</div>


</template>

<script>
export default {
  name: "spring",
  data() {
    return {};
  }
};
</script>
