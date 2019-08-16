<align/>

```html
<div class="params-container">
  <div class="param-item">
    <div class="param-cell font-bold">key</div>
    <div class="param-cell font-bold">value</div>
  </div>
  <div class="param-item">
    <div class="param-cell">message</div>
    <div class="param-cell">消息文字</div>
  </div>
  ...
</div>
```

```scss
  .params-container {
    display: table;
    border: 1px solid #ddd;
    .param-item {
      display: table-row;
    }
    .param-cell {
      display: table-cell;
      padding: 10px;
    }
    .font-bold {
      font-weight: bold;
    }
  }
```

:::tip
In fact, `table` is only the basic use of `table`, but it is not easy to think of when `table` is not commonly used.
:::

