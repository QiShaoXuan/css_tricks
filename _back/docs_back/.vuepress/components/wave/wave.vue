<style scoped lang="scss">
  .wave-container {
    .wave {
      height: 400px;
      border: 1px solid #ddd;
    }
    .control {
      .control-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 15px;
        label {
          font-size: 18px;
          width: 120px;
          flex-shrink: 0;
        }
        .control-value {
          flex-grow: 1;
        }
      }
    }
    .btn-container {
      margin-left: 15px;
    }
    .code-container {
      position: relative;
      min-height: 60px;
    }
    .hide-btn {
      position: absolute;
      right: 15px;
      top: 15px;
    }
  }
</style>

<template>
  <div class="wave-container">
    <div class="wave"></div>
    <div class="code-container">
      <el-button type="primary" size="mini" class="hide-btn"
        @click="hideCode">{{hide?'show':'hide'}} code
      </el-button>
      <div class="language-css extra-class">
           <pre v-show="!hide" class="language-css"><code
             ref="configContainer"></code></pre>
      </div>
    </div>
    <div class="control">
      <div class="control-item">
        <label>toggle</label>
        <el-switch
          v-model="animate"
          active-text="animate"
          inactive-text="pause">
        </el-switch>
      </div>
      <div class="control-item">
        <label>number</label>
        <el-slider class="control-value" :min="0" :max="10"
          v-model="config.number" input-size="mini"
          show-input></el-slider>
      </div>

      <div class="control-item">
        <label>smooth</label>
        <el-slider class="control-value" :min="0" :max="100"
          v-model="config.smooth" input-size="mini"
          show-input></el-slider>
      </div>

      <div class="control-item">
        <label>velocity</label>
        <el-slider class="control-value" :min="1" :max="10"
          v-model="config.velocity" input-size="mini"
          show-input></el-slider>
      </div>
      <div class="control-item">
        <label>height</label>
        <el-slider class="control-value" :min="80"
          :max="300"
          v-model="config.height" input-size="mini"
          :step="10"
          show-input></el-slider>
      </div>
      <div class="control-item">
        <label>colors</label>
        <el-color-picker
          v-for="(color,index) in config.colors"
          :key="index"
          v-model="config.colors[index]"></el-color-picker>

        <div class="btn-container">
          <el-button class="btn"
            v-show="config.colors.length>1"
            @click="delColors(index)" plain size="mini"
            icon="el-icon-minus" circle></el-button>
          <el-button class="btn add-btn" type="primary"
            plain size="mini" icon="el-icon-plus" circle
            @click="addColors"></el-button>
        </div>
      </div>

      <div class="control-item">
        <label>border.show</label>
        <el-switch
          v-model="config.border.show"
        >
        </el-switch>
      </div>
      <div>
        <div class="control-item">
          <label>border.width</label>
          <el-slider class="control-value" :min="1"
            :max="10"
            v-model="config.border.width" input-size="mini"
            show-input></el-slider>
        </div>
        <div class="control-item">
          <label>border.color</label>
          <el-color-picker
            v-for="(color,index) in config.border.color"
            :key="index"
            v-model="config.border.color[index]"></el-color-picker>
          <div class="btn-container">
            <el-button class="btn"
              v-show="config.border.color.length>0"
              @click="delBorderColors(index)" plain
              size="mini" icon="el-icon-minus"
              circle></el-button>
            <el-button class="btn add-btn" type="primary"
              plain size="mini" icon="el-icon-plus" circle
              @click="addBorderColors"></el-button>
          </div>
        </div>
      </div>

      <div class="control-item">
        <label>opacity</label>
        <el-slider class="control-value" :min=".1" :max="1"
          v-model="config.opacity" input-size="mini"
          :step=".1"
          show-input></el-slider>
      </div>

      <div class="control-item">
        <label>position</label>
        <el-radio v-model="config.position"
          label="bottom">bottom
        </el-radio>
        <el-radio v-model="config.position"
          label="top">top
        </el-radio>
        <el-radio v-model="config.position"
          label="left">left
        </el-radio>
        <el-radio v-model="config.position"
          label="right">right
        </el-radio>
      </div>

    </div>

  </div>
</template>

<script>
  import Prism from "prismjs";
  import Wave from './wave.es.js'

  export default {
    name: 'wave',
    data() {
      return {
        animate: true,
        wave: null,
        hide: false,
        config: {
          number: 3,
          smooth: 50,
          velocity: 1,
          height: 80,
          colors: ['#ff7657'],
          opacity: .5,
          position: 'bottom',
          border: {
            show: true,
            width: 2,
            color: [null]
          },
        }
      }
    },
    watch: {
      config: {
        handler() {
          this.wave.setOptions(this.config)
          this.setCode()

        },
        deep: true
      },
      animate() {
        if (this.animate) {
          this.wave.animate()
        } else {
          this.wave.pause()
        }
      }
    },
    methods: {
      hideCode() {
        this.hide = !this.hide
      },
      delColors() {
        this.config.colors.splice(this.config.colors.length - 1)
      },
      addColors() {
        this.config.colors.push('#ff7657')
      },
      delBorderColors() {
        this.config.border.color.splice(this.config.border.color.length - 1)
      },
      addBorderColors() {
        this.config.border.color.push(null)
      },
      setCode() {
        let code = `const wave = new Wave('#wave', {\n${this.getConfigStr(this.config, 1)}})`
        setTimeout(() => {
          this.$refs['configContainer'].innerHTML = Prism.highlight(code, Prism.languages.javascript)
        })
      },
      getConfigStr(obj, index) {
        let config = ''
        let space = ''
        for (let i = 0; i < index * 2; i++) {
          space += ` `
        }
        for (let key in obj) {
          if (Object.prototype.toString.call(obj[key]) === "[object Array]") {
            config += `${space}${key}: [${obj[key].join(', ')}],\n`
          } else if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
            config += `${space}${key}: {\n${this.getConfigStr(obj[key], index + 1)}${space}},\n`
          } else {
            config += `${space}${key}: ${obj[key]},\n`
          }
        }
        return config
      }
    },
    mounted() {
      this.wave = new Wave('.wave', this.config)
      this.wave.animate()
      this.setCode()
    }
  }
</script>
