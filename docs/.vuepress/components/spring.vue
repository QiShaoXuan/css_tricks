<style scoped lang="stylus">
// @import url(https://fonts.googleapis.com/css?family=Lobster)
// @import "../../../node_modules/mathsass/dist/math";
body
  display flex
  align-items center
  justify-content center
  position: fixed
  top 0
  right 0
  bottom 0
  left 0
  background white
  color #b61a44

// 定义弹跳函数
spring-wobbly(t) {
  // '**'为次方计算： 2.71828 的 (-6 * t)次方
  return -0.5 * (2.71828 ** (-6 * t)) * (-2 * (2.71828 ** (6 * t)) + sin(12 * t) + 2 * cos(12 * t));
}

@keyframes move {
  for i in (0 .. 100) {
    {i + '%'} {
      transform: scale(spring-wobbly((i / 30)), spring-wobbly((i / 20)));
    }
  }
}

h1
  text-align center
  font-size 40px
  animation 4s move linear infinite
  margin-bottom 40px

</style>

<template>
<div>
  <h1>
   弹簧动效
  </h1>
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
