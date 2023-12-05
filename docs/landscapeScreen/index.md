:::tip
编写时以横屏布局即可
:::

```scss
.landscape-container {
  position: absolute;
  overflow: hidden;
}

// 竖屏
@media screen and (orientation: portrait) {
  .landscape-container {
    width: 100vh;
    height: 100vw;
    top: calc((100vh - 100vw) / 2);
    left: calc((100vw - 100vh) / 2);
    transform: rotate(90deg);
    transform-origin: 50% 50%;
  }
}

// 横屏
@media screen and (orientation: landscape) {
  .landscape-container {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    transform: none;
    transform-origin: 50% 50%;
  }
}
```

