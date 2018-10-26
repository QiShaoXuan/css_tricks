## 区别

### 伪类

- 伪类更多的定义的是状态，如`:hover`，或者说是一个可以使用 CSS 进行修饰的特定的特殊元素
- 伪类使用一个冒号`:`

### 伪元素

- 伪元素简单来说就是不存在于DOM文档树中的虚拟的元素，它们和HTML元素一样，但是你又无法使用JavaScript去获取，如`:before`
- 伪元素使用两个冒号`::`


## 伪类

1. `:focus`

   选择获得焦点的元素

2. `:visited`

   选择已访问的链接

3. `:link`

   选择未被访问的链接

4. `:active`

   选择活动链接,即当链接被点击时的状态


5. `:lang`

   选取带有以指定值开头的 lang 属性的元素

   ```css
   div:lang(hello){
       background:red;
   }
   ```

   ```html
   <p lang='hello'>foo</p>
   ```

6. `:required`

   选择具有required 属性的表单元素

7. `:valid`

    选择通过匹配正确的所要求的表单元素

8. `:invalid`

    伪类指定一个不匹配指定要求的表单元素

   6,7,8虽然能辅助表单验证，但好像并不能阻止提交，只能起到辅助提示的作用

9. `:not`

   排除其他选择器

   ```css
   ul > li:not(:last-child)::after {
    	float:left;
   }
   ```

   除了最后一个li其他都左浮动

   `:not`中可以写任意选择器

10. `:nth-child`

  选择元素的第n个子元素

  ```css
  :nth-child(even) /* 下标为偶数的子元素 */
  :nth-child(odd) /* 下标为奇数的子元素 */
  :nth-child(3n)  /* 下标为3的倍数的子元素 */
  :nth-child(-n + 4)  /* 下标小于4的子元素 */
  ```

11. `:checked`
  选择已被选中的单选元素

12. `:only-child`
  选择仅有一个子元素时的子元素

13. `:only-of-type`
  选择父节点中仅有一种符合类型的元素

## 伪元素

1. `::selection`

   设置选中文本的样式

2. `::placeholder`

   设置表单元素`placeholder`属性的样式

3. `::first-letter`

   设置段落的第一个字体的样式

4. `::first-line`

   设置段落的第一行文字的样式
   
