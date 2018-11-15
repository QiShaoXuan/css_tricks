<tab-hoverTab/>

<tab-clickTab/>

```html
<ul class="tabs">
    <li>tab1</li>
    ...
</ul>
```

```scss
  .tabs {
    li {
      color: #909399;
      background-color: #fff;
      &::after {
        content: "";
        width: 0;
        height: 2px;
        background-color: #00adb5;
        position: absolute;
        left: 100%;
        bottom: 0;
        transition: all .4s;
      }

      &:hover {
        color: #00adb5;
        &::after {
          width: 100%;
          left: 0;
          transition-delay: 0.1s;
        }
        & ~ li::after {
          left: 0;
        }
      }
    }
  }
```

:::tip
`click` 变化只需把 `:hover` 改为对应的类名即可
:::



