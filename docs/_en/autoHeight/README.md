:::tip
Demand:
1. The parent element is fixed in height
2. The parent element has a number of highly variable child elements
3. One of the child elements requires that the rest of the space be filled and a scroll bar appear
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

