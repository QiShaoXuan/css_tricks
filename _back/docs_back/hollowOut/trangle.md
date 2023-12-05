## 三角镂空

<hollowOut-triangle/>

```scss
 @function sqrt($r) {
    $x0: 1;
    $x1: $x0;

    @for $i from 1 through 10 {
      $x1: $x0 - ($x0 * $x0 - abs($r)) / (2 * $x0);
      $x0: $x1;
    }

    @return $x1 * 1px;
  }
  
  @mixin hollow-triangle-projecture($width,$color) {
    background: linear-gradient(45deg, transparent sqrt($width * $width/2), $color 0) bottom left /50% 100% no-repeat,
    linear-gradient(-45deg, transparent sqrt($width * $width/2), $color 0) bottom right /50% 100% no-repeat;
  }

  @mixin hollow-triangle-sunken($width,$color) {
    background: linear-gradient(-45deg, transparent sqrt($width * $width/2), $color 0) bottom left /50% 100% no-repeat,
    linear-gradient(45deg, transparent sqrt($width * $width/2), $color 0) bottom right /50% 100% no-repeat;
  }

  .hollow-triangle-projecture {
    width: 60px;
    height: 150px;
    @include hollow-triangle-projecture(60, #00adb5)
  }

  .hollow-triangle-sunken {
    width: 60px;
    height: 150px;
    @include hollow-triangle-sunken(60, #00adb5)
  }
```

