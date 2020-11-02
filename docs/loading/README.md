## loading

<loading-load8/>

```html
<div class="loader-container">
  <div class="loader-child"></div>
  <div class="loader-child"></div>
  <div class="loader-child"></div>
</div>
```

```scss
.loader-container {
  width: 100px;
  height: 100px;
  perspective: 780px;
  position: relative;
}

.loader-child {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;

  &:nth-of-type(1) {
    left: 0%;
    top: 0%;
    animation: rotate-one 1.15s linear infinite;
    border-bottom: 3px solid #5c5edc;
  }
  &:nth-of-type(2) {
    right: 0%;
    top: 0%;
    animation: rotate-two 1.15s linear infinite;
    border-right: 3px solid #9e85c3;
  }
  &:nth-of-type(3) {
    right: 0%;
    bottom: 0%;
    animation: rotate-three 1.15s linear infinite;
    border-top: 3px solid #e9908a;
  }
}

@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
```

## loading

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
      background: #00adb5;
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

## loading

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
    stroke: #00adb5;
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

## loading

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
  background-color: rgba(0, 169, 178,.2);;
  &::before {
    content: "";
    width: 70px; // 50 * √2
    height: 70px; // 50 * √2
    background-color: #00adb5;
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



## loading

<loading-load4/>
```html
<div class="load-container">
  <div class="container">
      <div class="boxLoading boxLoading1"></div>
      <div class="boxLoading boxLoading2"></div>
      <div class="boxLoading boxLoading3"></div>
      <div class="boxLoading boxLoading4"></div>
      <div class="boxLoading boxLoading5"></div>
  </div>
</div>
```
```scss
.load-container {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    .container{
        width: 50px;
        height: 60px;
        text-align: center;
        font-size: 10px;
        .boxLoading {
            background-color: #00adb5;
            height: 100%;
            width: 6px;
            display: inline-block;

            -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
            animation: stretchdelay 1.2s infinite ease-in-out;
        }
        .boxLoading2 {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
        }
        .boxLoading3 {
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
        }
        .boxLoading4 {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }
        .boxLoading5 {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
        }
    }
}

@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
  20% { -webkit-transform: scaleY(1.0) }
}
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
```


## loading

<loading-load5/>
```html
  <div class="load-container"></div>
```
```scss
.load-container {
    width: 60px;
    height: 60px;
    background-color: #00adb5;

    margin: 50px auto;
    -webkit-animation: rotateplane 1.2s infinite ease-in-out;
    animation: rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes rotateplane {
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}

@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
  } 50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
  } 100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
```

## loading

<loading-load6/>
```html
  <div class="load-container">
      <div class="load load1"></div>
      <div class="load load2"></div>
      <div class="load"></div>
  </div>
```
```scss
.load-container {
    margin: 50px auto;
    width: 150px;
    text-align: center;
    .load {
        width: 20px;
        height: 20px;
        background-color: #00adb5;

        border-radius: 100%;
        display: inline-block;
        -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
        animation: bouncedelay 1.4s infinite ease-in-out;
        /* Prevent first frame from flickering when animation starts */
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    .load1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    .load2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
```

## loading

<loading-load7/>
```html
<div class="load-container">
  <div class="container container1">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
  </div>
  <div class="container container2">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
  </div>
  <div class="container container3">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
  </div>
</div>
```
```scss
.load-container {
    margin: 50px auto;
    width: 48px;
    height: 48px;
    position: relative;
    .container{
        position: absolute;
        width: 100%;
        height: 100%;
        .circle{
            width: 12px;
            height: 12px;
            background-color: #00adb5;

            border-radius: 100%;
            position: absolute;
            -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
            animation: bouncedelay 1.2s infinite ease-in-out;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
        }
        .circle1 { top: 0; left: 0; }
        .circle2 { top: 0; right: 0; }
        .circle3 { right: 0; bottom: 0; }
        .circle4 { left: 0; bottom: 0; }
    }
    .container1 {
        .circle2 {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }
        .circle3 {
            -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s;
        }
        .circle4 {
            -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s;
        }
    }
    .container2 {
        -webkit-transform: rotateZ(45deg);
        transform: rotateZ(45deg);
        .circle1 {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
        }
        .circle2 {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
        }
        .circle3 {
            -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s;
        }
        .circle4 {
            -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s;
        }
    }
    .container3 {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
        .circle1 {
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
        }
        .circle2 {
            -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s;
        }
        .circle3 {
            -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s;
        }
        .circle4 {
            -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s;
        }
    }
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
```

## 相关项目

1. <a href="https://epic-spinners.epicmax.co/#/" target="_blank">Epic Spinners</a>

