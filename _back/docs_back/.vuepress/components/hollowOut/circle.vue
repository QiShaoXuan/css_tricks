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

  .warpper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }


</style>

<template>
  <div>
    <div class="warpper">
      <div class="hollow-one-circle"></div>
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
        :max="20" label="半径"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">距离：</span>
      <el-input-number v-model="distance" size="mini"
        :min="50"
        :max="300" label="分割位置"></el-input-number>
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
    name: '',
    data() {
      return {
        positions: ['top', 'bottom', 'left', 'right'],
        position: 'left',
        width: 100,
        height: 100,
        radio: 10,
        color: '#00adb5',
        shadow: false,
        distance: 40,
      }
    },
    computed: {
      style() {
        let circlePosition = ''
        switch (this.position) {
          case 'top':
            circlePosition = `${this.distance}px 0`
            break;
          case 'bottom':
            circlePosition = `${this.distance}px ${this.height}px`
            break;
          case 'left':
            circlePosition = `0 ${this.distance}px`
            break;
          case 'right':
            circlePosition = `${this.width}px ${this.distance}px`
            break;
        }
        return `.hollow-one-circle{
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: radial-gradient(circle at ${circlePosition}, transparent ${this.radio}px, ${this.color} 0) top left/${this.width}px 100% no-repeat;
  ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
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
        let style = document.querySelector('#hollow-ine-circle-style')
        style.innerHTML = this.style
      }
    },
    mounted() {
      const style = document.createElement('style')
      style.setAttribute('id', 'hollow-ine-circle-style')
      document.head.appendChild(style)

      setTimeout(() => {
        this.setStyle()
        this.setStyleToBody()
      })
    }
  }

</script>
