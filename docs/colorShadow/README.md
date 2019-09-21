<colorShadow/>

```html
<div class="color-shadow">
  <img src="..." alt="" />
</div>
```

```scss
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
    background: url(...) no-repeat center/cover;
    filter: blur(10px) brightness(80%) opacity(0.8);
    transform: scale(0.95);
    z-index: 1;
  }
}
```

:::tip
`SCSS` 可以简化，但是这样写是问题最少的。
:::
