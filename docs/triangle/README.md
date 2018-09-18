# 三角形边框，不规则图形阴影

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
        border-color: transparent transparent #409eff transparent;
        position: absolute;
        left:-52px;top:-1px;
        z-index: -1;
      }
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
    
    // 虚线阴影
    .shadow-dotted{
      width:120px;
      height:120px;
      border: 6px dotted #409eff;
      filter: drop-shadow(2px 2px 2px rgba(64,158,225,.9));
    }
    
    // 右缺圆角阴影
    .circle-square{
      width:120px;
      height:120px;
      background: radial-gradient(circle at bottom right, transparent 49px, #409eff 34px);
      filter: drop-shadow(2px 2px 2px rgba(64,158,225,.9));
    }
```

