<objectTemp/>

## 概念解释
`object-fit` 和 `object-position` 可以类比为 `background-size` 和 `background-position`

两个属性仅作用于替换元素

替换元素是指

> 其内容不受 CSS 视觉格式化模型（中文释义参见这里）控制的元素，比如image, 嵌入的文档(iframe之类)或者applet。比如，img元素的内容通常会被其src属性指定的图像替换掉。替换元素通常有其固有的尺寸：一个固有的宽度，一个固有的高度和一个固有的比率。比如一幅位图有固有用绝对单位指定的宽度和高度，从而也有固有的宽高比率。另一方面，其他文档也可能没有固有的尺寸，比如一个空白的html文档。
>
> CSS 渲染模型不考虑替换元素内容的渲染。这些替换元素的展现独立于CSS。object, video, textarea, input也是替换元素，audio和canvas在某些特定情形下为替换元素。
>
>  使用 CSS 的content属性插入的对象是匿名替换元素。

也就是说，`img` 和 `form`表单控件， 以及 `video` 等元素即是替换元素，可以被 `object-fit` 和 `object-position` 属性所控制。


## 适用

对于容器固定而图片尺寸不确定，或者需要响应式布局时，图片固定而容器宽度不确定，需要等比例展示图片或视频。

::: danger
IE 全版本不支持，edge16+ 支持，PC慎用
:::



