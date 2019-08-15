
# CSS 变量

## 声明

1. `--name`，以 `--` 作为起始
2. 声明在 `:root`
3. 大小写敏感

## 使用

`var(name,defaultValue)`

- name ： 变量名
- defaultValue：默认值

## 使用注意

1. 变量仅能作为属性值，不能作为属性名
2. 如果定义数值，不能与数值单位连用
3. 如果数值带有单位，不能使用用字符串
4. 变量遵循继承和可覆盖的特性

::: tip
数值与数值单位连用可以使用 `calc(var(--gap) * 1px);`
:::

## 应用

1. 响应式设计中
```css
body {
  --primary: #7F583F;
  --secondary: #F7EFD2;
}

a {
  color: var(--primary);
  text-decoration-color: var(--secondary);
}

@media screen and (min-width: 768px) {
  body {
    --primary:  #F7EFD2;
    --secondary: #7F583F;
  }
}
```

2. 主题

在 body 中声明不同主题的变量，仅需更换 body 对应的主题类名即可

3. 简化一些 CSS 交互的写法


<hide-cssVar/>
