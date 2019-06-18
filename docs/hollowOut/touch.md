# 用 CSS 写一个商城卡券需要几步


还在为上面这样格式各样的商城卡券的样式而发愁？CSS 不熟，canvas 太难，怎么办？

用 CSS 写一个商城卡券需要几步？

一共需要三步：

1. 打开<a href="https://qishaoxuan.github.io/css_tricks/hollowOut/">这个网址</a>（浏览器输入 https://qishaoxuan.github.io/css_tricks/hollowOut/）
2. 找到需要的样式
3. 复制粘贴

## 交给测试后，我们来分析下 CSS 卡券。

我们来准备一下基础知识

### radial-gradient

```css
background: radial-gradient(shape size at position, start-color, ..., last-color);
```

|    值    |                             描述                             |
| :------: | :----------------------------------------------------------: |
|  shape   | 确定圆的类型:<br />ellipse (默认): 指定椭圆形的径向渐变。 circle ：指定圆形的径向渐变 |
|   size   |                        定义渐变的大小                        |
| position |                        定义渐变的位置                        |

这样，我们能很容易写出一个居中的圆形背景图

```css
  .center-circle {
    width: 100px;
    height: 100px;
    background: radial-gradient(circle at 50px 50px, transparent 10px, #00adb5 0);
  }
```

### linear-gradient

```CSS
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

|              值              |               描述               |
| :--------------------------: | :------------------------------: |
|          direction           | 用角度值指定渐变的方向（或角度） |
| color-stop1, color-stop2,... |      用于指定渐变的起止颜色      |

我们不需要知道具体的渐变过程，只要写一个简单的，写一个使用渐变属性而不渐变背景图即可：

```css
  .linear-gradient {
    width: 100px;
    height: 100px;
    background: linear-gradient(to right, #00adb5, #00adb5);
  }
```

### background

`background`是可以设置多个图片的，遵循`background: [background-color] [background-image] [background-repeat] [background-attachment] [background-position] / [ background-size] [background-origin] [background-clip];` 使用`,`隔开即可。

## 开始组合基础知识

写一个最简单的

用 CSS 写一个商城卡券需要几步:
https://juejin.im/post/5d07c2476fb9a07ed524a08d
点个赞点个star~