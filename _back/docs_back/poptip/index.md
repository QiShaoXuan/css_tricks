<poptip/>


```html
  <div class="poptip btn" aria-controls="弹出气泡">poptip</div>
```

```scss
$poptipBg: #30363d;
$color: #fff;
$triangle: 8px;
$distance: -12px;
.poptip {
  position: relative;
  z-index: 101;
  &::before,
  &::after {
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease 0.2s;
    box-sizing: border-box;
  }
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: $triangle $triangle 0 $triangle;
    border-color: $poptipBg transparent transparent transparent;
    left: calc(50% - #{$triangle});
    top: 0px;
    transform: translateX(0%) translateY($distance);
  }

  &::after {
    font-size: 14px;
    color: $color;
    content: attr(aria-controls);
    position: absolute;
    padding: 6px 12px;
    white-space: nowrap;
    z-index: -1;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%) translateY($distance);
    background: $poptipBg;
    line-height: 1;
    border-radius: 2px;
  }
  &:hover::before,
  &:hover::after {
    visibility: visible;
    opacity: 1;
  }
}

.btn {
  min-width: 100px;
  line-height: 1.5;
  padding: 5px 10px;
  color: #fff;
  background: #00adb5;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}
```


::: tip
更改定位及 `translate` 即可修改气泡位置
:::

