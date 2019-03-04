::: tip
在Unicode中，`0x000A` 字符是专门控制换行的。在 CSS 中，我们可以写为 `\000A` 或 `\A`,我们可以用它来作为 `::after` 伪元素的内容，并将其添加到指定元素的尾部，实现换行效果。
:::

<lineBreak/>

```html
<div class="content">
  <span class="br">海客談瀛洲，煙濤微茫信難求。</span>
  <span class="br">越人語天姥，雲霞明滅或可覩。</span>
  <span class="br">天姥連天向天橫，勢拔五嶽掩赤城。</span>
  <span class="br">天台四萬八千丈，對此欲倒東南傾。</span>
</div>
```

```scss
.content {
  .br::after {
    content: "\A";
    white-space: pre;
  }
}
```

> <a href="https://lhammer.cn/You-need-to-know-css/#/line-breaks">https://lhammer.cn/You-need-to-know-css/#/line-breaks</a>


