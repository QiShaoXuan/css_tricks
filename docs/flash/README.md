<flash/>

```html
  <div class="flash-container">
    <img src="..." alt="">
  </div>
```

```scss
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
    width: 10px;
    background: #fff;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    filter: blur(6px);
    animation: move 1.8s infinite ease-in;
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
```

:::tip
设置为悬停效果可能更显自然一点。
:::
