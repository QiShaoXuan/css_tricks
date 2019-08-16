## 背景变色
<hoverBg/>

```html
<div class="button"><span>hover me to change</span></div>
```

```scss
  .button {
    margin:40px auto;
    width:200px;
    height:60px;
    padding:0 30px;
    line-height: 60px;
    text-align: center;
    position: relative;
    appearance: none;
    background: #f72359;
    border: none;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border-radius: 100px;
  }

  .button span {
    position: relative;
  }

  .button::before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #4405f7, transparent);
    transform: translate(-50%, -50%);
    transition: width .2s ease, height .2s ease;
  }

  .button:hover::before {
    --size: 400px;
  }
```

```javascript
document.querySelector('.button').addEventListener('mousemove', function (e) {
  const x = e.pageX - this.offsetLeft
  const y = e.pageY - this.offsetTop

  this.style.setProperty('--x', `${ x }px`)
  this.style.setProperty('--y', `${ y }px`)
})
```

## 边框动画

<hoverBorder/>

```html
 <div class="button">
   <div class="button__content">hover me to change</div>
 </div>
```

```scss
.btn-container{
  padding:10px;
  .button{
    width:200px;
    height:60px;
    position: relative;
    background: #fff;
    margin:30px auto;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    line-height: 60px;
    &::before{
      content:'';
      width:0;
      height:0;
      background:  #00adb5;
      position: absolute;
      top:-1px;right:-1px;
      z-index: 0;
      transition: width .5s,height .5s;
    }
    &::after{
      content:'';
      width:0;
      height:0;
      background:  #00adb5;
      position: absolute;
      bottom:-1px;left:-1px;
      z-index: 0;
      transition: width .5s,height .5s;
    }
    &:hover::before{
      width:calc(100% + 2px);
      height:calc(100% + 2px);
    }
    &:hover::after{
      width:calc(100% + 2px);
      height:calc(100% + 2px);
    }

    .button__content{
      height:100%;
      width:100%;
      position: absolute;
      left:0;top:0;
      z-index: 1;
      background: #fff;
    }
  }
}
```


