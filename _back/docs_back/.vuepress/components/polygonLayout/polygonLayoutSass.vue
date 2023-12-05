<style scoped lang="scss">

  @function fact($number) {
    $value: 1;
    @if $number > 0 {
      @for $i from 1 through $number {
        $value: $value * $i;
      }
    }
    @return $value;
  }

  @function pow($number, $exp) {
    $value: 1;
    @if $exp > 0 {
      @for $i from 1 through $exp {
        $value: $value * $number;
      }
    } @else if $exp < 0 {
      @for $i from 1 through -$exp {
        $value: $value / $number;
      }
    }
    @return $value;
  }

  @function pi() {
    @return 3.14159265359;
  }

  @function rad($angle) {
    $unit: unit($angle);
    $unitless: $angle / ($angle * 0 + 1);

    @if $unit == deg {
      $unitless: $unitless / 180 * pi();
    }
    @return $unitless;
  }

  @function sin($angle) {
    $sin: 0;
    $angle: rad($angle);

    @for $i from 0 through 10 {
      $sin: $sin + pow(-1, $i) * pow($angle, (2 * $i + 1)) / fact(2 * $i + 1);
    }
    @return $sin;
  }

  @function cos($angle) {
    $cos: 0;
    $angle: rad($angle);
    // Iterate a bunch of times.
    @for $i from 0 through 10 {
      $cos: $cos + pow(-1, $i) * pow($angle, 2 * $i) / fact(2 * $i);
    }
    @return $cos;
  }

  @function tan($angle) {
    @return sin($angle) / cos($angle);
  }

  @mixin polygonLayoutStyles($num,$radius,$width,$height) {
    $startAngle: if($num%2==1, 0,  2 * pi() / $num / 2);

    @for $i from 1 through $num {
      $angle : $i * 2 * pi() / $num + $startAngle;

      .polygonLayout-item:nth-of-type(#{$i}) {
        left: -$radius * sin($angle) - $width / 2 * 1px;
        top: -$radius * cos($angle) - $height / 2 * 1px;
      }
    }
  }

  .polygonLayout-container {
    width: 320px;
    height: 450px;
    margin: 0 auto;
    position: relative;
    .polygonLayout {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      .polygonLayout-item {
        width: 60px;
        height: 60px;
        background: #00adb5;
        border-radius: 50%;
        text-align: center;
        line-height: 60px;
        color: #fff;
        position: absolute;
      }
      @include polygonLayoutStyles(3, 160, 60, 60)
    }
  }
</style>

<template>
  <div class="container">
    <div class="polygonLayout-container">
      <div class="polygonLayout">
        <div class="polygonLayout-item"></div>
        <div class="polygonLayout-item"></div>
        <div class="polygonLayout-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'polygonLayout',
    data() {
      return {
        num: 3,
        maxNum: 10
      }
    },
  }
</script>
