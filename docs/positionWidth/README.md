<positionWidth/>

```scss{2,13,14,15}
.tip {
    white-space: nowrap;
    padding: 5px 14px;
    border: 1px solid #00adb5;
    border-radius: 21px;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    bottom:40px;
    background-color: #fff;
    font-size: 16px;
    color:#00adb5;
    *{
      display: inline-block;
    }
}
```

:::tip
容器设置为 `white-space: nowrap;`，子元素设置为 `display: inline-block;`

不能使用 `left: 0;right :0;margin: auto` 的方法居中元素
:::
