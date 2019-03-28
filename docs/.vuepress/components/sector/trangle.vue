<style lang="scss" id="trangle-style">
  @function pi() {
    @return 3.14159265359;
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

  @function fact($number) {
    $value: 1;
    @if $number > 0 {
      @for $i from 1 through $number {
        $value: $value * $i;
      }
    }
    @return $value;
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
    @for $i from 0 through 10 {
      $cos: $cos + pow(-1, $i) * pow($angle, 2 * $i) / fact(2 * $i);
    }
    @return $cos;
  }

  @function tan($angle) {
    @return sin($angle) / cos($angle);
  }

  $count: 2;
  @mixin sector($angle, $radius, $color) {
    $width: tan(($angle / $count / 2)) * $radius;
    @for $index from 0 to $count {
      span:nth-child(#{$index + 1}) {
        transform: translate(-50%, 0) rotate($angle / $count / 2 + $index * $angle / $count);
        border-width: $radius $width 0 $width;
        border-color: $color transparent transparent transparent;
      }
    }
  }

  .ourter-container {
    padding: 15px 0;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }

  .trangle-container {
    width: 100px;
    height: 100px;
    /*background: rgba(0, 173, 181, 0.4);*/
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    span {
      position: absolute;
      left: 50%;
      top: 0;
      width: 0;
      height: 0;
      border-style: solid;
      transform-origin: bottom center;
    }
    @include sector(60deg, 50px, #00adb5);
  }

  .trangle-outer-container {
    height: 300px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .key-value-container {
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .w-50 {
    float: left;
    width: 48%;
    &:nth-of-type(even) {
      float: right;
    }
  }
</style>
<template>
  <div class="ourter-container">
    <div class="trangle-outer-container">
      <div class="trangle-container"
        :style='{width:`${width}px`,height:`${width}px`}'>
        <span v-for="(item ,index) in spanStyles"
          :key="index" :style="item"></span>
      </div>
    </div>
    <div class="key-value-container">
      <div class="w-50">
        <span class="key">半径</span>
        <el-slider class="slider" v-model="radius" :min="20"
          :max="150" show-input
          input-size="mini"></el-slider>
      </div>
      <div class="w-50">
        <span class="key">角度</span>
        <el-slider class="slider" v-model="deg" :min="1"
          :max="359" show-input
          input-size="mini"></el-slider>
      </div>
      <div class="w-50">
        <span class="key">起始角度</span>
        <el-slider class="slider" v-model="startAngle"
          :min="0" :max="360" show-input
          input-size="mini"></el-slider>
      </div>
      <div class="w-50">
        <span class="key">颜色</span>
        <div class="block">
          <el-color-picker
            v-model="color"></el-color-picker>
        </div>
      </div>
    </div>
    <div class="code">
      <pre class="language-css"><code
        ref="code"></code></pre>
    </div>
    <div class="code">
      <pre class="language-html"><code
        ref="htmlcode"></code></pre>
    </div>
  </div>

  <!--https://codepen.io/massimo-cassandro/pen/rWpEEV-->
  <!--https://sunmengyuan.github.io/garden/2017/11/09/css-sector.html-->
</template>

<script>
  import Prism from "prismjs";

  export default {
    name: "",
    data() {
      return {
        radius: 50,
        deg: 60,
        startAngle: 0,
        color: "#00adb5",
        spanStyles: []
      };
    },
    computed: {
      width() {
        return this.radius * 2
      },
      code() {
        const rad = (Math.PI / 180) * this.deg;
        const angle = this.deg;
        const radius = this.radius;
        const color = this.color;
        const count = 2;
        const width = (Math.tan(rad / count / 2) * radius).toFixed(4);
        const startAngle = this.startAngle;

        const allSpans = this.setSpans();
        const container = this.getContainer(radius);

        let styles = [container, allSpans];
        let spanStyles = [];
        for (let i = 0; i < count; i++) {
          styles.push(`
  .trangle-container span:nth-child(${i + 1}) {
    transform: translate(-50%, 0) rotate(${startAngle +
          angle / count / 2 +
          (i * angle) / count}deg);
    border-width: ${radius}px ${width}px 0 ${width}px;
    border-color: ${color} transparent transparent transparent;
  }`);

          spanStyles[i] = {
            transform: `translate(-50%, 0) rotate(${startAngle +
            angle / count / 2 +
            (i * angle) / count}deg)`,
            borderWidth: `${radius}px ${width}px 0 ${width}px`,
            borderColor: `${color} transparent transparent transparent`
          };
        }

        this.spanStyles = spanStyles;

        return styles.join("");
      }
    },
    watch: {
      code() {
        console.log('hihi')

        this.setCode();
      }
    },
    methods: {
      setSpans() {
        return `
  .trangle-container span {
    position: absolute;
    left: 50%;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    transform-origin: bottom center;
  }`;
      },
      getStyle(values) {
        return `
  .trangle-container span:nth-child(2) {
    transform: translate(-50%, 0) rotate(82.5deg);
    border-width: 50px 26.02835px 0 26.02835px;
    border-color: #00adb5 transparent transparent transparent;
  }`;
      },
      getContainer(radius) {
        return `.trangle-container {
    width: ${radius * 2}px;
    height: ${radius * 2}px;
    background: transparent;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
  }`;
      },
      setCode() {
        this.$refs["code"].innerHTML = Prism.highlight(
          this.code,
          Prism.languages.css
        );
      },
      setHtmlCode(){
        const html = `<div class="trangle-container">
  <span></span>
  <span></span>
</div>`
        this.$refs["htmlcode"].innerHTML = Prism.highlight(
          html,
          Prism.languages.html
        );
      }
    },
    mounted() {
      setTimeout(() => {
        this.setCode();
        this.setHtmlCode()
      });
    }
  };
</script>
