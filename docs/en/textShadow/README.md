## Text color gradient

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
Use of `-webkit-background-clip: text` , can also set the background color to the background image
:::

## Text blurry

<textShadow-textBlurry/>

```scss
.text-blurry{
  text-align: center;
  color: transparent;
  text-shadow: 0 0 5px rgba(0,0,0,0.5);
}
```

## Hollow text

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

## Luminous text

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

## Text shadow

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
