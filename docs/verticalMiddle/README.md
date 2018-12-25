# 垂直居中

## 未知父元素高度
```scss
.parentElement {
  position: relative;
  // 方法1   transform: translateY(-50%);
  .childElement {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  // 方法2
  .childElement {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}

```

## 已知父元素高度，仅有一个子元素
```scss
.parentElement {
  height: xxx;
  .childElement {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}
```

## display:flex
```scss
.parentElement{
  display: flex;
  align-items: center
}
```

## 伪元素:before
```scss
.parentElement {
  display: block;
  &:before {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
  .childElement {
    display: inline-block;
    vertical-align: middle;
  }
}
```


## 隐藏节点
```scss
.parentElement {
  background: blue;
  width: 100%;
  height: 100px;
  .hide {
    width: 20%;
    height: 35%;//隐藏节点的高为 (父级高 - 去子级高)/2
  }
  .childElement {
    background: yellow;
    width: 20%;
    height: 30%;
  }
}
```


## display:table-cell

```scss
.parentElement {
  display: table;
  .childElement {
    display: table-cell;
    vertical-align: middle;
  }
  .grandsonElement {}
}
```
