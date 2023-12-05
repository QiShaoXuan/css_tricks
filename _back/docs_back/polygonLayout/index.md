<polygonLayout-polygonLayout/> 

## JS

:::tip
逻辑在 `setPolyGonLayout` 函数内，其他部分为交互，方便理解
:::

```vue
<style scoped lang="scss">
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
    }
  }
</style>

<template>
  <div class="container">
    <div class="polygonLayout-container">
      <div class="polygonLayout">
        <div class="polygonLayout-item"
          v-for="(item,index) in position" :key="index"
          :style="{left:`${item.left}px`,top:`${item.top}px`}">
          item-{{index+1}}
        </div>
      </div>
    </div>
    
    <div class="key-value">
      <span class="key">选择边数:</span>
      <el-radio v-model="num" :label="3"></el-radio>
      ...
    </div>
  </div>
</template>

<script>
  export default {
    name: 'polygonLayout',
    data() {
      return {
        num: 3,
        maxNum:10
      }
    },
    computed: {
      position() {
        return this.setPolyGonLayout(this.num, 160, {
          width: 60,
          height: 60
        })
      },
    },
    methods: {
      setPolyGonLayout(num, radius, itemSize = {
        width: 0,
        height: 0
      }) {
        if (num < 3) return

        const startAngle = num % 2 === 1 ? 0 : 2 * Math.PI / num / 2
        let position = []

        for (let i = 0; i < num; i++) {
          const angle = i * 2 * Math.PI / num + startAngle

          position.push({
            top: -radius * Math.cos(angle) - itemSize.height / 2,
            left: -radius * Math.sin(angle) - itemSize.width / 2,
          })
        }

        return position
      }
    }
  }
</script>
```

## SASS
:::tip
逻辑与上述 js 中的相同，只是为了不同的写法（装逼？）重新实现。
:::
```scss
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
```

:::tip
以上内容来自群里一位朋友提问如何优雅实现五边形布局，感觉挺有意思就写了个函数，但实际中应该不会常用，权且做个记录。

单论计算方式的话，实际上是不需要在 item 外添加父元素的，但是为了方便布局上的理解，还是加上了。
:::






