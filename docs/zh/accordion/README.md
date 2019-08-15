<accordion/>

```html
    <ul class="accordion-container">
      <li class="accordion-item" style="background-image: url(bg1.jpg);">
        <p class="accordion-title">背景1</p>
      </li>
      ···
    </ul>
```

```scss
  .accordion-container {
      overflow: hidden;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      .accordion-item {
        list-style: none;
        height: 500px;
        transition: width 0.5s;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        &:not(:hover) {
          width: 20%;
        }
        &:hover {
          width: 800px;
          &::after {
            opacity: 1;
          }
        }
        &::after{
          content:'';
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          background-color: rgba(0, 0, 0, .4);
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s;
        }
        .accordion-title {
          color: #fff;
          font-size: 18px;
          z-index: 2;
        }
      }
    }
```


