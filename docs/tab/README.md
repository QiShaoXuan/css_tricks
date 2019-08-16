## 追随动画

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

## 中间展开

<tab-centerTab/>

```scss
  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      cursor: pointer;
      position: relative;
      font-size: 18px;
      color: #909399;
      background-color: #fff;
      &::after {
        content: "";
        width: 0;
        height: 2px;
        background-color: #00adb5;
        position: absolute;
        left: 0; right: 0;
        bottom: 0;
        margin: auto;
        transition: width .4s;

      }
    }
    li.active {
      &::after {
        width: 100%;
      }
    }
  }
```


