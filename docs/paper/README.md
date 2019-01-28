<paper/>

:::tip
背景图地址 <a href="https://github.com/QiShaoXuan/css_tricks/blob/master/docs/.vuepress/public/images/paper.png" target="blank">paper.png</a>
:::

```scss
  .paper {
    width: 500px;
    position: relative;
    margin: 30px auto;
    padding: 30px 0;
    border: 1px solid #efefef;
    background-color: #FFFFFD;
    background-image: url(paper.png);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;

    &::before, &::after {
      content: '';
      z-index: -1;
      position: absolute;
      left: 10px;
      bottom: 10px;
      width: 45%;
      height: 55%;
      max-height: 100px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
      transform: skew(-15deg) rotate(-4deg);
    }
    &::after {
      left: auto;
      right: 10px;
      transform: skew(15deg) rotate(4deg);
    }
  }
```

