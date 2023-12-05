## rem 设置
<<< ./tpl/rem.js

:::tip
防止 ios 中微信字体变大后布局错乱
```scss
body{
  -webkit-text-size-adjust: 100% !important;
}
```
:::

## dpi 设置
<<< ./tpl/dpi.js

::: tip
安卓 2.3 的检测感觉已经不需要了，所以可以直接将 `meta` 标签写在页面里
:::
