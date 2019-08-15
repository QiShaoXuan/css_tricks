<stickyBall/>


```html
 <div class="sticky-container">
   <div class="blurfield">
     <div class="ball1"></div>
     <div class="ball2"></div>
   </div>
 </div>
```

```scss
.sticky-container {
  background: #000;
  overflow: hidden;
  
  .blurfield {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    filter: blur(10px) contrast(30);
  }

  .ball1,
  .ball2 {
    width: 80px;
    height: 80px;
    background-color: #fff;
    position: absolute;
    animation: ball 10s infinite;
    border-radius: 100%;
  }

  .ball2 {
    animation-delay: -2s;
  }
}

@keyframes ball {
  0% {
    transform: translateX(-100px);
  }

  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(-100px);
  }
}
```

