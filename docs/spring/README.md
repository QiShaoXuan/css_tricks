<!-- # 弹簧动效 -->

<spring/>

```stylus
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
  animation 4s move linear infinite

```

 > <a href="https://codepen.io/dtinth/pen/jbXKRv" target="_blank">https://codepen.io/dtinth/pen/jbXKRv</a>

