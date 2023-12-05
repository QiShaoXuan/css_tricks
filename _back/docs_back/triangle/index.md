# 三角形边框

<triangle/>

```scss
    // 带边框的三角形
    .border-triangle{
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 50px 50px 50px;
      position:relative;
      border-color: transparent transparent #fff transparent;
      &::before{
        content:'';
        border-style: solid;
        border-width: 0 52px 52px 52px;
        border-color: transparent transparent #00adb5 transparent;
        position: absolute;
        left:-52px;top:-1px;
        z-index: -1;
      }
    }
```

