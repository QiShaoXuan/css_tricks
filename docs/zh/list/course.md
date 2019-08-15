# list-style 不止有 none

初始化项目的时候，习惯了在 reset.css 里面随手一个 `list-style: none` 的童鞋请举爪~

这几天在做富文本编辑的 list 部分，正好用到了 `list-style` 这个属性，才发现原来这个属性有这么的设置项，特地记录分享一下，原来 `list-style` 不止有 `none`。

`list-style` 是由 `list-style-type`, `list-style-image` 和 `list-style-position` 三个属性组合的简写属性。每个属性都可单独设置，也可以直接设置在 `list-style` 上。下面分别介绍这三个属性。

## [在线查看，效果更佳](https://qishaoxuan.github.io/css_tricks/list/#list-style)

## list-style-type

制定具有 `display: list-item` 属性的列表元素的外观，一般指 `li` 元素。

<h4>disc</h4>

- 实心圆点 (默认值)

<h4>circle</h4>

- 空心圆点

<h4>square</h4>

- 实心方块

<h4>decimal</h4>

- 十进制阿拉伯数字

<h4>cjk-decimal</h4>

- 中日韩十进制数

<h4>decimal-leading-zero</h4>

- 十进数

<h4>lower-roman</h4>

- 小写罗马数字

<h4>upper-roman</h4>

- 大写罗马数字

<h4>lower-greek</h4>

- 小写希腊数字

<h4>lower-alpha</h4>

- 小写 ASCII

<h4>lower-latin</h4>

- 小写 ASCII（IE7 以下不支持）

<h4>upper-alpha</h4>

- 大写 ASCII

<h4>upper-latin</h4>

- 大写 ASCII（IE7 以下不支持）

<h4>armenian</h4>

- 传统美式数字

<h4>georgian</h4>

- 传统英式数字

<h4>hebrew</h4>

- 传统希伯来数字

<h4>ethiopic-numeric </h4>

- 埃塞俄比亚数字

<h4>hiragana</h4>

- 平假名数字（日语）

<h4>katakana</h4>

- 片假名数字（日语）

<h4>hiragana-iroha</h4>

- 旧式平假名数字（日语）

<h4>katakana-iroha</h4>

- 旧式平假名数字（日语）

<h4>japanese-informal</h4>

- 日语非正式数字

<h4>japanese-formal</h4>

- 日语数字 

<h4>korean-hangul-formal</h4>

- 韩文数字

<h4>korean-hanja-informal</h4>

- 韩式数字

<h4>korean-hanja-formal</h4>

- 韩式数字（繁体）

<h4>simp-chinese-informal</h4>

- 中文数字

<h4>cjk-ideographic</h4>

- 中文数字

<h4>simp-chinese-formal</h4>

- 大写繁体中文数字

<h4>trad-chinese-informal</h4>

- 繁体中文数字

<h4>trad-chinese-formal</h4>

- 大写繁体中文数
字

## list-style-position

设置标记相对于元素的位置

<h4>outside</h4> 

- 标记盒在主块盒的外面。
  
<h4>inside</h4>

- 标记盒是主要块盒中的第一个行内盒，处于元素的内容流之后。

## list-style-image

设置列表元素的标记设置为指定图片

```css
ul{
  list-style-image: url('https://qishaoxuan.github.io/css_tricks/assets/img/arrow.0ad29aea.svg')
}
```

## [查看动态设置](https://qishaoxuan.github.io/css_tricks/list/#list-style)
