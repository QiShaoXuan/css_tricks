<tab-circleBorder/>

```scss
$radius: 10px;
$bg-color: #eee;
$active-color: #00adb5;

.tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $active-color;

  li {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    cursor: pointer;
    position: relative;
    font-size: 18px;
    color: #fff;
    background: $active-color;
    transition: color 0.2s, height 0.2s, margin 0.2s;
    border-radius: $radius;
    position: relative;

    &:not(:first-of-type)::before,
    &:not(:first-of-type)::after {
      content: "";
      bottom: 0;
      width: $radius;
      height: $radius;
      position: absolute;
    }

    &.active {
      color: #909399;
      background: $bg-color;
      height: 50px;
      line-height: 50px;
      margin-top: -10px;
      border-radius: $radius $radius 0 0;
      &::before {
        left: -$radius;
        border-radius: 0 0 $radius 0;
        background: $active-color;
        z-index: 2;
      }
      &::after {
        left: -$radius;
        background: $bg-color;
        z-index: 1;
      }
    }
    &.active + li {
      &::before {
        left: 0;
        background: $bg-color;
      }
      &::after {
        border-radius: 0 0 0 $radius;
        left: 0;
        background: $active-color;
      }
    }
  }
}
```
