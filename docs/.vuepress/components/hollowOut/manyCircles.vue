<style scoped lang="scss">
  .key-value {
    .key {
      width: 80px;
    }
    .key-value--item:not(:last-of-type) {
      border-right: 2px solid #ccc;
      padding-right: 10px;
      margin-right: 10px;
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
  }

  @mixin hollow-circles-horizontal($width,$height,$r,$color) {
    width: $width;
    height: $height;
    position: relative;
    background: $color;
    margin-bottom: $r *2;

    &::after {
      content: '';
      position: absolute;
      height: $r;
      left: 0;
      right: 0;
      bottom: -1 * $r;
      background-image: linear-gradient(to right, $color $r, transparent $r, transparent), radial-gradient($r*2 circle at $r*2 $r, transparent $r, $color $r);
      background-size: 3*$r $r;
    }
  }

  .hollow-circle-horizontal {
    @include hollow-circles-horizontal(300px, 100px, 5px, #00adb5)
  }

  .warpper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }
</style>

<template>
  <div class="hollow-circle-container">
    <div class="warpper">
      <div class="hollow-circles"></div>
    </div>

    <div class="key-value">
      <span class="key">位置：</span>
      <el-radio v-model="position"
        v-for="(value ,index) in positions" :key="index"
        :label="value"></el-radio>
    </div>
    <div class="key-value">
      <span class="key">宽度：</span>
      <el-input-number v-model="width" size="mini"
        :min="100"
        :max="500" label="宽度"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">长度：</span>
      <el-input-number v-model="height" size="mini"
        :min="50"
        :max="500" label="长度"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">半径：</span>
      <el-input-number v-model="radio" size="mini" :min="1"
        :max="10" label="半径"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">阴影：</span>
      <el-switch
        v-model="shadow"
        active-color="#00adb5">
      </el-switch>
    </div>

    <div class="language-css extra-class">
       <pre class="language-css"><code
         ref="css"></code></pre>
    </div>


  </div>
</template>

<script>
  import Prism from "prismjs";

  export default {
    name: 'hollow-circle',
    data() {
      return {
        positions: ['top', 'bottom', 'left', 'right'],
        position: 'bottom',
        width: 300,
        height: 100,
        radio: 5,
        color: '#00adb5',
        shadow: false
      }
    },
    computed: {
      style() {
        let afterStlye = ''
        let circlePosition = ''
        const to = this.position === 'top' || this.position === 'bottom' ? 'to right' : 'to bottom'
        const backgroundSize = this.position === 'top' || this.position === 'bottom' ? `${this.radio * 3}px ${this.radio}px;` : `${this.radio}px ${this.radio * 3}px;`
        switch (this.position) {
          case 'top':
            afterStlye = `height: ${this.radio}px;
  width:100%;
  left: 0;
  top: ${this.radio * -1}px;`
            circlePosition = `${this.radio * 2}px 0px`
            break
          case 'bottom':
            afterStlye = `height: ${this.radio}px;
  width:100%;
  left: 0;
  bottom: ${this.radio * -1}px;`
            circlePosition = `${this.radio * 2}px ${this.radio}px`
            break
          case 'left':
            afterStlye = `height: 100%;
  width:${this.radio}px;
  top: 0;
  left: ${this.radio * -1}px;`
            circlePosition = `0px ${this.radio * 2}px`
            break
          case 'right':
            afterStlye = `height: 100%;
  width:${this.radio}px;
  top: 0;
  right: ${this.radio * -1}px;`
            circlePosition = `${this.radio}px ${this.radio * 2}px`
            break
        }


        return `.hollow-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: ${this.color};
  margin-${this.position}: ${this.radio * 2}px;
  ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}
.hollow-circles::after {
  content: '';
  position: absolute;
  ${afterStlye}
  background-image: linear-gradient(${to}, ${this.color} ${this.radio}px, transparent ${this.radio}px, transparent),
  radial-gradient(${this.radio * 2}px circle at ${circlePosition}, transparent ${this.radio}px, ${this.color} ${this.radio }px);
  background-size: ${backgroundSize}
}`
      }
    },
    watch: {
      style() {
        this.setStyle()
        this.setStyleToBody()
      }
    },
    methods: {
      setStyle() {
        this.$refs['css'].innerHTML = Prism.highlight(this.style, Prism.languages.css)
      },
      setStyleToBody() {
        let style = document.querySelector('#hollow-circles-style')
        style.innerHTML = this.style
      }
    },
    mounted() {
      const style = document.createElement('style')
      style.setAttribute('id', 'hollow-circles-style')
      document.head.appendChild(style)

      setTimeout(() => {
        this.setStyle()
        this.setStyleToBody()
      })
    }
  }
</script>
