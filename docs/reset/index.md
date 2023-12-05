## reset

```css
html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;}
header,footer,section,article,aside,nav,hgroup,address,figure,figcaption,menu,details{display:block;}
table{border-collapse:collapse;border-spacing:0;}
caption,th{text-align:left;font-weight:normal;}
html,body,fieldset,img,iframe,abbr{border:0;}
i,cite,em,var,address,dfn{font-style:normal;}
[hidefocus],summary{outline:0;}
li{list-style:none;}
h1,h2,h3,h4,h5,h6,small{font-size:100%;}
sup,sub{font-size:83%;}
pre,code,kbd,samp{font-family:inherit;}
q:before,q:after{content:none;}
textarea{overflow:auto;resize:none;}
label,summary{cursor:default;}
a,button{cursor:pointer;}
h1,h2,h3,h4,h5,h6,em,strong,b{font-weight:bold;}
del,ins,u,s,a,a:hover{text-decoration:none;}
body,textarea,input,button,select,keygen,legend{font:12px/1.14 arial,\5b8b\4f53;color:#333;outline:0;}
body{background:#fff;}
a,a:hover{color:#333;}

```

## 去除input默认填充的背景颜色

```css
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
}
```

## 清除input[type=number]的默认样式

```css
input[type=number] {
  -moz-appearance: textfield;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

```

## 清除移动端 a 标签等点击区域变色
```css
*{
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
```

## 清除移动端 input 样式
```css
input{
    border: none;
    -moz-appearance:none;
    -webkit-appearance : none ; /*解决ios上按钮的圆角问题*/
    border-radius: 0; /*解决ios上输入框圆角问题*/
    outline:medium; /*去掉鼠标点击的默认黄色边框*/
    background-color: transparent;
}
```

## 避免ios滑动滚动条卡顿
```css
*{
  -webkit-overflow-scrolling : touch
}
```

## 一次搞定

```scss
*{-webkit-overflow-scrolling : touch;-webkit-tap-highlight-color: rgba(255, 255, 255, 0);}
html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;}
header,footer,section,article,aside,nav,hgroup,address,figure,figcaption,menu,details{display:block;}
table{border-collapse:collapse;border-spacing:0;}
caption,th{text-align:left;font-weight:normal;}
html,body,fieldset,img,iframe,abbr{border:0;}
i,cite,em,var,address,dfn{font-style:normal;}
[hidefocus],summary{outline:0;}
li{list-style:none;}
h1,h2,h3,h4,h5,h6,small{font-size:100%;}
sup,sub{font-size:83%;}
pre,code,kbd,samp{font-family:inherit;}
q:before,q:after{content:none;}
textarea{overflow:auto;resize:none;}
label,summary{cursor:default;}
a,button{cursor:pointer;}
h1,h2,h3,h4,h5,h6,em,strong,b{font-weight:bold;}
del,ins,u,s,a,a:hover{text-decoration:none;}
body,textarea,input,button,select,keygen,legend{font:12px/1.14 arial,\5b8b\4f53;color:#333;outline:0;}
body{background:#fff;}
a,a:hover{color:#333;}

input {
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none; /*解决ios上按钮的圆角问题*/
  border-radius: 0; /*解决ios上输入框圆角问题*/
  outline: medium; /*去掉鼠标点击的默认黄色边框*/
  background-color: transparent;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }

  &[type=number]::-webkit-inner-spin-button,
  &[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
```
