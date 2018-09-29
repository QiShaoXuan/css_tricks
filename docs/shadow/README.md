# 不规则图形阴影

<shadowTemp/>

```scss
    // 虚线阴影
    .shadow-dotted{
      width:120px;
      height:120px;
      border: 6px dotted #409eff;
      filter: drop-shadow(2px 2px 2px rgba(64,158,225,.9));
    }

    // 三角形阴影
    .shadow-triangle{
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 50px 50px 50px;
      border-color: transparent transparent #409eff transparent;
      filter:drop-shadow(10px 0px 10px  rgba(39,92,171,0.5));
    }

    // 右缺圆角阴影
    .circle-square{
      width:120px;
      height:120px;
      background: radial-gradient(circle at bottom right, transparent 49px, #409eff 34px);
      filter: drop-shadow(2px 2px 2px rgba(64,158,225,.9));
    }

    // 信息窗口
    .tip {
      width: 140px;
      height: 80px;
      border: 1px solid #409eff;
      border-radius: 4px;
      position: relative;
      background-color: #fff;
      filter: drop-shadow(0px 2px 4px rgba(64, 158, 225, 0.9));
      &::before {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #fff transparent;
        position: absolute;
        top: -10px;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 2;
      }
      &::after {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #409eff transparent;
        position: absolute;
        top: -11px;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 1;
      }
    }
```

