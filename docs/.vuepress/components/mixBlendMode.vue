<style scoped lang="scss">
  .mode-container {
    position: relative;
    margin: 100px auto 50px;
    height: 150px;
    .mode {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      mix-blend-mode: normal;
    }
    .red {
      background-color: rgba(255, 0, 0, .8);
      transform: translateX(25%);
    }

    .blue {
      background-color: rgba(0, 255, 0, .8);
      transform: translateX(-25%);
    }

    .white {
      background-color: rgba(0, 0, 255, .8);
      transform: translateY(-25%);
    }
  }

  .mix-blend-container {
    .radio-group {
      display: flex;
      justify-content: center;
      align-content: flex-start;
      flex-wrap: wrap;

    }
    .col-50 {
      width: 50%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-bottom: 15px;
      box-sizing: border-box;
      &:nth-of-type(2n-1) {
        padding-left: 150px;
      }
      &:nth-of-type(2n) {
        padding-left: 100px;
      }
    }
  }

  @media screen and (max-width: 959px) {
    .mix-blend-container {
      .col-50 {
        padding-left: 0px !important;
      }
    }
  }

</style>

<template>
  <div class="mix-blend-container">
    <div class="mode-container">
      <div class="mode red"
        :style="{mixBlendMode:modeChoosen}"></div>
      <div class="mode blue"
        :style="{mixBlendMode:modeChoosen}"></div>
      <div class="mode white"
        :style="{mixBlendMode:modeChoosen}"></div>
    </div>

    <div class="language-css extra-class">
      <pre class="language-css" style="margin-bottom:30px;"><code
        ref="mixBlendModeCss"></code></pre>

    </div>

    <el-radio-group v-model="modeChoosen"
      class="radio-group">
      <div class="col-50" v-for="(item,index) in data"
        :key="index">
        <el-radio
          :label="item.value">{{item.value}} {{$lang === 'zh-CN'?item.label:''}}
        </el-radio>
      </div>
    </el-radio-group>
  </div>
</template>

<script>
  import Prism from "prismjs";

  export default {
    name: 'mixBlendMode',
    data() {
      return {
        data: [
          {value: 'normal', label: '正常'},
          {value: 'multiply', label: '正片叠底'},
          {value: 'screen', label: '滤色'},
          {value: 'overlay', label: '叠加'},
          {value: 'darken', label: '变暗'},
          {value: 'lighten', label: '变亮'},
          {value: 'color-dodge', label: '颜色减淡'},
          {value: 'color-burn', label: '颜色加深'},
          {value: 'hard-light', label: '强光'},
          {value: 'soft-light', label: '柔光'},
          {value: 'difference', label: '差值'},
          {value: 'exclusion', label: '排除'},
          {value: 'hue', label: '色相'},
          {value: 'saturation', label: '饱和度'},
          {value: 'color', label: '颜色'},
          {value: 'luminosity', label: '亮度'},
        ],
        modeChoosen: 'normal'
      }
    },
    watch: {
      modeChoosen() {
        this.updateCss()
      }
    },
    methods: {
      updateCss() {
        this.$refs["mixBlendModeCss"].innerHTML = Prism.highlight(
          `mix-blend-mode: ${this.modeChoosen};`,
          Prism.languages.css
        );
      }
    },
    mounted() {
      this.updateCss()
    }
  }
</script>
