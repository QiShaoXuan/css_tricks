<style scoped lang="scss">
  .wave-container {
    .wave {
      height: 400px;
      border: 1px solid #ddd;
      margin-bottom: 30px;
    }
    .control{
      .control-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom:15px;
        label {
          font-size: 18px;
          width: 120px;
          flex-shrink: 0;
        }
        .control-value{
          flex-grow: 1;
        }
      }
    }
  }
</style>

<template>
  <div class="wave-container">
    <div class="wave"></div>

    <div class="control">
      <div class="control-item">
        <label>number</label>
        <el-slider class="control-value" :min="0" :max="100"
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
        <el-slider class="control-value" :min=".1" :max="1"
          v-model="config.height" input-size="mini"
          :step=".1"
          show-input></el-slider>
      </div>
      <div class="control-item">
        <label>colors</label>
        <el-color-picker v-for="(color,index) in config.colors" :key="index" v-model="config.colors[index]"></el-color-picker>

        <el-button class="btn" v-show="config.colors.length>1" @click="delColors(index)" plain size="mini" icon="el-icon-minus" circle></el-button>
        <el-button class="btn add-btn" type="primary" plain size="mini" icon="el-icon-plus" circle @click="addColors"></el-button>
      </div>

      <div class="control-item">
        <label>border.show</label>
        <el-switch
          v-model="config.border.show"
          active-text="显示边框"
          inactive-text="隐藏边框">
        </el-switch>
      </div>
      <div>
        <div class="control-item">
          <label>border.width</label>
          <el-slider class="control-value" :min="1" :max="10"
            v-model="config.border.width" input-size="mini"
            show-input></el-slider>
        </div>
        <div class="control-item">
          <label>border.color</label>
          <el-color-picker v-for="(color,index) in config.border.color" :key="index" v-model="config.border.color[index]"></el-color-picker>
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
        <el-radio v-model="config.position" label="bottom">bottom</el-radio>
        <el-radio v-model="config.position" label="top">top</el-radio>
        <el-radio v-model="config.position" label="left">left</el-radio>
        <el-radio v-model="config.position" label="right">right</el-radio>
      </div>

    </div>

  </div>
</template>

<script>
  import Wave from './wave.es.js'

  export default {
    name: 'wave',
    data() {
      return {
        wave:null,
        config: {
          number: 3,
          smooth: 50,
          velocity: 1,
          height: .3,
          colors: ['#ff7657'],
          border: {
            show: true,
            width: 2,
            color: [null]
          },
          opacity: .5,
          position: 'bottom',
        }
      }
    },
    watch:{
      config:{
        handler(){
          this.wave.setOptions(this.config)
        },
        deep:true
      }
    },
    methods:{
      delColors(){

      },
      addColors(){
        this.config.colors.push(null)
      }
    },
    mounted() {
      this.wave = new Wave('.wave')
      this.wave.animate()
    }
  }
</script>
