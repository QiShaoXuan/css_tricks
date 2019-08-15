## 文字颜色渐变

<textColor/>

```scss
.text-clip{
  color:transparent;
  font-size: 40px;
  font-weight: bold;
  background: linear-gradient(45deg, rgba(0,173,181,1) 0%, rgba(0,173,181,.4)  100%);
  -webkit-background-clip: text;
}
```

:::tip
利用的是 `-webkit-background-clip: text` 属性，也可以将背景颜色设置为背景图
:::

## 文字模糊

<textShadow-textBlurry/>

```scss
.text-blurry{
  text-align: center;
  color: transparent;
  text-shadow: 0 0 5px rgba(0,0,0,0.5);
}
```

## 空心文字

<textShadow-hollowText/>

```css
.hollow-text {
  color: #fff;
  text-shadow: 0 0 2px rgba(0, 173, 181, .2882),
  0 0 2px rgba(0, 173, 181, .2882),
  0 0 2px rgba(0, 173, 181, .2882),
  0 0 2px rgba(0, 173, 181, .2882),
  0 0 2px rgba(0, 173, 181, .2882),
  0 0 2px rgba(0, 173, 181, .2882),
  0 0 2px rgba(0, 173, 181, .2882),
  0 0 2px rgba(0, 173, 181, .2882),
  0 0 2px rgba(0, 173, 181, .2882);
}
```

## 文字外发光

<textShadow-glowText/>

```css
.glow-text{
  line-height:60px;
  background: #00adb5;
  color:#fff;
  text-align: center;
  text-shadow: 0 0 0.1em, 0 0 0.3em;
}
```

## 文字阴影

<textShadow-textshadow/>

```css
.text-shadow{
  color:#00adb5;
  text-shadow: 1px 1px rgba(0,173,181,.2882),
  2px 2px rgba(0,173,181,.2882),
  3px 3px rgba(0,173,181,.2882),
  4px 4px rgba(0,173,181,.2882);
}
```
