# 垂直居中

## 未知容器高度
```css
parentElement {
  position: relative;
}

childElement {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
 // 或者
childElement {
  position: absolute;
  top: 0;bottom:0;
  margin:auto;
}
```

## 已知容器高度，仅有一个子元素
```css
parentElement {
  height: xxx;
}

childElement {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
```

## flex
```css
parentElement{
  display: flex;
  align-items: center
}
```

## table
```css
parentElement {
  height: 400px;
  display: table;
}
childElement {
  display: table-cell;
  vertical-align: middle;
}
grandsonElement {
  width: 100px;
  height: 100px;
  background: #409eff;
}
```