:::tip
需求：
1. 父元素高度固定
2. 父元素内有若干高度不固定的子元素
3. 其中一个子元素要求撑满其余位置且可以出现滚动条
:::

<autoHeight/>

```html
<div class="parent">
  <div class="top-child"></div>
  <div class="auto-height">
    <div class="auto-height__wrapper">
      ⋅⋅⋅
    </div>
  </div>
  <div class="bottom-child"></div>
</div>
```

```scss
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & > * {
      flex-shrink: 0;
      width: 100%;
    }

    .auto-height {
      flex-grow: 1;
      position: relative;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;

      .auto-height__wrapper {
        width: 100%;
        height: 100%;
        overflow: auto;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
```

