## loading_1

<loading-load1/>
```html
  <div class="load-container">
    <div class="boxLoading"></div>
  </div>
```
```scss
.load-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  .boxLoading {
    width: 50px;
    height: 50px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    &:before {
      content: "";
      width: 50px;
      height: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: 59px;
      left: 0;
      border-radius: 50%;
      animation: shadow 0.5s linear infinite;
    }
    &:after {
      content: "";
      width: 50px;
      height: 50px;
      background: #409EFF;
      animation: animate 0.5s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
  }
}

@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
```

 > <a href="https://codepen.io/dicson/pen/vOxZjM" target="_blank">https://codepen.io/dicson/pen/vOxZjM</a>

## loading_2

<loading-load2/>

```html
  <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
    <circle id="loading-inner" cx="75" cy="75" r="60"/>
  </svg>
```

```scss
.load-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 150px;
}

#load {
  width: 75px;
  animation: loading 3s linear infinite;
  #loading-inner {
    stroke: {
      dashoffset: 0;
      dasharray: 300;
      width: 10;
      miterlimit: 10;
      linecap: round;
    }
    animation: loading-circle 2s linear infinite;
    stroke: #409EFF;
    fill: transparent;
  }
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading-circle {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -600;
  }
}
```

> <a href="https://codepen.io/pedox/pen/PwQezw" target="_blank">https://codepen.io/pedox/pen/PwQezw</a>

## load_3

<loading-load3/>
```html
  <div class="load"></div>
```
```scss
.load {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background-color:rgba(64, 158, 225, 0.2);
  &::before {
    content: "";
    width: 70px; // 50 * √2
    height: 70px; // 50 * √2
    background-color: #409eff;
    position: absolute;
    left: 50%;
    bottom: 50%;
    z-index: 1;
    transform-origin: left bottom;
    animation: rotate 1.5s infinite linear;
  }
  &::after {
    content: "";
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    z-index: 2;
    border-radius: 50%;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```
