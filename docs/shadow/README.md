## 常见投影
<shadow-normalShadow/>

```scss
// 无偏移投影
 .shadow1 {
    box-shadow: 0 0 12px rgba(0, 173, 181, 0.8);
  }
// 下侧投影
  .shadow2 {
    box-shadow: 0px 6px 12px -4px rgba(0, 173, 181, 0.8);
  }
// 右侧投影
  .shadow3 {
    box-shadow: 6px 6px 12px -5px rgba(0, 173, 181, 0.8);
  }
// 双侧投影
  .shadow4 {
    box-shadow: 6px 0 12px -5px rgba(0, 173, 181, 0.8), -6px 0 12px -5px rgba(0, 173, 181, 0.8);
  }
// 菜单投影
  .shadow5 {
    box-shadow: 0 3px 12px rgba(0, 173, 181, 0.8);
  }
// 投影边框
  .shadow6 {
    box-shadow: 0 0 0 1px rgba(0, 173, 181, 0.8);
  }
```

## 不规则图形投影

<shadow-irregularShadow/>

```scss
    // 虚线阴影
    .shadow-dotted{
      width:120px;
      height:120px;
      border: 6px dotted #00adb5;
      filter: drop-shadow(2px 2px 2px rgba(64,158,225,.9));
    }

    // 三角形阴影
    .shadow-triangle{
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 50px 50px 50px;
      border-color: transparent transparent #00adb5 transparent;
      filter:drop-shadow(10px 0px 10px  rgba(39,92,171,0.5));
    }

    // 右缺圆角阴影
    .circle-square{
      width:120px;
      height:120px;
      background: radial-gradient(circle at bottom right, transparent 49px, #00adb5 34px);
      filter: drop-shadow(2px 2px 2px rgba(64,158,225,.9));
    }

    // 信息窗口
    .tip {
      width: 140px;
      height: 80px;
      border: 1px solid #00adb5;
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
        border-color: transparent transparent #00adb5 transparent;
        position: absolute;
        top: -11px;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 1;
      }
    }
```

