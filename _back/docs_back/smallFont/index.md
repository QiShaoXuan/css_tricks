<ClientOnly>
   <smallFont/>
</ClientOnly>


:::tip
使用 `svg` 作为解决小于 12px 字号文字的方案：

1. 使用 `transform: scale()` 设置后占位区域并没有改变，难以调节对齐方式。
2. 使用 `canvas` 无法选中文字（也可以解决，但不如 `svg` 简洁）
:::
