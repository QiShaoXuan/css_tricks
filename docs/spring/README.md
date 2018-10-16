<spring/>

```stylus
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

h1
  animation 4s scale linear infinite

.moveBox
  animation: 2s moveLeft linear infinite;
```


