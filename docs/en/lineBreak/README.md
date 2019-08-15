::: tip
In Unicode, the `0x000A` character is specifically used to control line breaks. In CSS, we can write as` \000A `or` \A `, we can use it as` ::after `pseudo-element content, and add it to the end of the specified element, achieve the newline effect.
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


