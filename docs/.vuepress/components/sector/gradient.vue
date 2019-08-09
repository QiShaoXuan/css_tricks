<style lang="scss" scoped>
  .conic-gradient {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }



  .conic-container {
    padding: 15px 0;
    &::after {
      content: '';
      display: block;
      clear: both;
    }
    .svg-container {
      height: 300px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .w-50 {
      width: 48%;
      float: left;
      &:nth-of-type(even) {
        float: right
      }
    }
  }
</style>

<template>
  <div class="conic-container">
    <div class="conic-gradient">
      <div class="sector" :style="style"></div>

    </div>

    <div class="code language-css extra-class">
      <pre class="language-css"><code
        ref="code"></code></pre>
    </div>
    <div class="w-50">
      <span class="key">半径</span>
      <el-slider class="slider" v-model="radius" :min="20"
        :max="150" show-input input-size="mini"></el-slider>
    </div>
    <div class="w-50">
      <span class="key">角度</span>
      <el-slider class="slider" v-model="deg" :min="1"
        :max="359" show-input input-size="mini"></el-slider>
    </div>
    <div class="w-50">
      <span class="key">起始角度</span>
      <el-slider class="slider" v-model="startAngle"
        :min="0" :max="startMax" show-input
        input-size="mini"></el-slider>
    </div>
    <div class="w-50">
      <span class="key">颜色</span>
      <div class="block">
        <el-color-picker v-model="color"></el-color-picker>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'conic-gradient',
    data() {
      return {
        radius: 100,
        deg: 80,
        startAngle: 40,
        color: '#00adb5'
      }
    },
    computed: {
      style: function () {
        const startAngle = Number((this.startAngle / 360 * 100 ).toFixed(2))
        const angle = Number((this.deg / 360 * 100 ).toFixed(2))

        return {
          'width': `${this.radius * 2}px`,
          'height': `${this.radius * 2}px`,
          'border-radius': '50%',
          'background': `conic-gradient(transparent ${startAngle}%, ${this.color} ${startAngle}% ${startAngle + angle}%, transparent ${angle}%)`
        }
      },
      startMax:function () {
        return 360 - this.deg
      }
    },

    watch: {
      style() {
        this.setCode()
      }
    },
    methods: {
      setCode() {
        const code = `.sector {
    width: ${this.style.width};
    height: ${this.style.height};
    border-radius: ${this.style['border-radius']};
    background: ${this.style.background};
  }`
        this.$refs['code'].innerHTML = Prism.highlight(code, Prism.languages.css)
      }
    },
    mounted(){
      setTimeout(() => {
        this.setCode()
      })
    }
  }
</script>
