## 圆形镂空

<hollowOut-circle/>

```scss
  @mixin hollow-circle-vertical($color,$r,$height,$top) {
    height: $height;
    position: relative;
    background: radial-gradient(circle at right bottom, transparent $r, $color 0) top right / 51% $top no-repeat,
    radial-gradient(circle at left bottom, transparent $r, $color 0) top left / 51% $top no-repeat,
    radial-gradient(circle at right top, transparent $r, $color 0) bottom right / 51% ($height - $top) no-repeat,
    radial-gradient(circle at left top, transparent $r, $color 0) bottom left / 51% ($height - $top) no-repeat;
    &::after {
      content: '';
      width: 100%;
      border: 1px dashed #fff;
      position: absolute;
      left: 0;
      top: $top;
    }
  }

  @mixin hollow-circle-horizontal($color,$r,$width,$left) {
    width: $width;
    position: relative;
    background: radial-gradient(circle at right top, transparent $r, $color 0) top left / $left 51% no-repeat,
    radial-gradient(circle at right bottom, transparent $r, $color 0) bottom left /$left 51% no-repeat,
    radial-gradient(circle at left top, transparent $r, $color 0) top right /($width - $left) 51% no-repeat,
    radial-gradient(circle at left bottom, transparent $r, $color 0) bottom right /($width - $left) 51% no-repeat;
    &::after{
      content:'';
      height:100%;
      border: 1px dashed #fff;
      position: absolute;
      left:$left;
      top:0;
    }
  }

  .hollow-circle-horizontal {
    height: 100px;
    @include hollow-circle-horizontal(#00adb5,10px,300px,60px)
  }

  .hollow-circle-vertical {
    width: 100px;
    @include hollow-circle-vertical(#00adb5,10px, 200px, 50px)
  }
```

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
