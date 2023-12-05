## 单行文字

<singleEllipsis/>

```scss
// 注意宽度是必须的
.article-container {
  width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## 多行文字

<multipleEllipsis/>

```scss
.article-container {
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; //需要显示的行数
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## scss 混合
```scss
@mixin textEllipsis($lineNum) {
  @if $lineNum == 1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } @else {
    display: -webkit-box;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: $lineNum; //需要显示的行数
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
```




