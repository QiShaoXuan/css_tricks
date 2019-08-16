## live demo
<flex-flex/>

## 属性解释
### flexbox
对Flex容器设置display:flex或者display:inline-flex


 <flex-flexbox/>

```html
<div class="wrap">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

```scss
.wrap {
  display: flex;
}
 ```

 ### flex-direction
控制Flex项目沿着主轴（Main Axis）(父容器) 的排列方向

<flex-flexDirection/>

```scss
.wrap {
  flex-direction：row || column || row-reverse || column-reverse
                // 水平（顺）|| 垂直（顺）|| 水平（逆）|| 垂直（逆）
}
 ```

 ### flex-wrap
控制Flex项目是否换行，默认值是nowrap，不换行

<flex-flexWrap/>

```scss
.wrap {
  flex-wrap：wrap || nowrap || wrap-reverse
            // 换行（正）|| 不换行 || 换行（反）
}
 ```


 ### flex-flow
flex-direction和flex-wrap两个属性的组合属性

```scss
.wrap {
  flex-flow：row wrap|| row nowrap || column wrap || column nowrap 等等
}
 ```

 ###  justify-content
Flex项目在整个Main-Axis上的对齐方式(父容器X轴)，默认是flex-start，起始端对齐

<flex-flexJustifyContent/>

```scss
.wrap {
   justify-content：flex-start || flex-end || center || space-between || space-around
                  // 起始端对齐 → || 末尾段对齐 ← || 居中对齐 || 首尾两端均匀分布 || 均匀分布（首尾两端的子容器到父容器的距离是子容器间距的一半）
}
 ```

 ###  align-items
Flex项目在Cross-Axis对齐方式(父容器Y轴)，默认是flex-start，起始端对齐

<flex-flexAlignItems/>

```scss
.wrap {
   align-items：flex-start || flex-end || center || baseline || stretch
                  // 起始端对齐 ↓ || 末尾段对齐 ↑ || 居中对齐 || 基线对齐（默认是指首行文字） || 子容器沿Y轴方向的尺寸拉伸至与父容器一致
}
 ```


 ###  align-content
该属性只针对子容器多行排列时，设置行与行之间的对齐方式，对单行无效。


<flex-flexAlignContent/>

```scss
.wrap {
   align-content：flex-start || flex-end || center || space-around || space-between || stretch
                  // 起始端对齐 ↓ || 末尾段对齐 ↑ || 居中对齐 || 等边距均匀分布 || 等间距均匀分布 || 拉伸对齐
}
 ```

 ###  order
改变子容器的排列顺序，覆盖 HTML 代码中的顺序，默认值为 0，可以为负值，数值越小排列越靠前。

<flex-flexOrder/>

```scss
.wrap {
  display:flex;
  div{
    order:1//数字
  }
}
 ```

 ###  flex-basis
在不伸缩的情况下子容器的原始尺寸。主轴为横向时代表宽度，主轴为纵向时代表高度。


```scss
.wrap {
  display:flex;
  // 主轴为横向时代表宽度
  flex-direction：row;
  div{
    flex-basis:120px;//数字
    height:80px;
  }
  // 或者

  // 主轴为纵向时代表高度
  // flex-direction：column;
  // div{
  //   flex-basis:120px;//数字
  //   width:80px;
  // }
}
 ```

 ###  flex-grow
父容器剩余空间按 1:2 的比例分配给子容器

  <flex-flexGrow/>

```scss
.wrap {
  display:flex;
  .div1{
    flex-grow:1
  }
  .div2{
    flex-grow:2
  }

}
 ```

 ###  flex-shrink
子容器超出的部分按 1:2 的比例从子容器中减去

  <flex-flexShrink/>

```scss
.wrap {
  display:flex;
  width:100px;
  .div1,.div2{
    flex-basis:200px;
    // 设置基础宽度，且超出父容器宽度
  }
  .div1{
    flex-shrink: 1;
  }
  .div2{
    flex-shrink: 2;
  }

}
 ```

 ###  align-self
每个子容器可以单独定义沿交叉(父容器Y)轴的排列的方式，此属性与父容器 align-items 属性完全一致，如果两者同时设置则以子容器的 align-self 属性为准。

<flex-flexAlignSelf/>

```scss
.wrap {
   align-self：flex-start || flex-end || center || baseline || stretch
              // 起始端对齐 || 末尾段对齐|| 居中对齐 || 基线对齐（默认是指首行文字） || 子容器沿Y轴方向的尺寸拉伸至与父容器一致
}
 ```




