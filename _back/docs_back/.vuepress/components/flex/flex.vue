<style scoped lang="scss">
  .live-flex {
    .tip {
      font-size: 14px;
      color: #999;
      margin-bottom:0;
    }
    .hide-btn{
      cursor: pointer;
    }
    .flex-container {
      padding: 15px;
      border: 1px solid #ddd;
      color: #fff;
      display: flex;

      .flex-item {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background: #00adb5;
        &:nth-of-type(1) {
          width: 70px;
          height: 70px;
          background: #0ea5c6;
        }
        &:nth-of-type(2) {
          width: 100px;
          height: 30px;
          background: #ffc60b;
        }
        &:nth-of-type(3) {
          width: 150px;
          height: 100px;
          background: #ff5733;
        }
        &:nth-of-type(4) {
          width: 300px;
          height: 140px;
          background: #e4406f;
        }
        &:nth-of-type(5) {
          width: 150px;
          height: 100px;
          background: #07456f;
        }
      }
    }
    .title {
      font-size: 24px;
      margin-top: 10px;
      margin-bottom: 0;
    }
    .key-value {
      .key {
        width: 120px;
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
    .bottom-border{
      border-bottom:1px solid #eee;
    }
  }

</style>

<template>
  <div class="live-flex">
    <p class="tip">click item to change stlye</p>
    <div class="flex-container" :style="containerStyle">
      <div class="flex-item"
        v-for="(item ,index) in itemStyles" :key="index"
        :style="item"
        @click="changeItemCss(item,index)">item-{{index+1}}
      </div>
    </div>
    <p class="title">
      <span>style of container</span>
      <span class="tip hide-btn" @click="()=>this.hideTop= !this.hideTop"><i :class="hideTop?'el-icon-arrow-up':'el-icon-arrow-down'"></i> {{hideTop?'show':'hide'}}</span>
    </p>
    <div class="bottom-border" v-show="!hideTop">
      <div class="language-css extra-class">
             <pre class="language-css"><code
               ref="flexContainer"></code></pre>
      </div>


      <div class="key-value">
        <span class="key">flex-direction:</span>
        <el-radio v-model="containerStyle['flex-direction']"
          v-for="(value ,index) in flexDirection" :key="index"
          :label="value"></el-radio>
      </div>

      <div class="key-value">
        <span class="key">flex-wrap:</span>
        <el-radio v-model="containerStyle['flex-wrap']"
          v-for="(value ,index) in flexWrap" :key="index"
          :label="value"></el-radio>
      </div>

      <div class="key-value">
        <span class="key">justify-content:</span>
        <el-radio v-model="containerStyle['justify-content']"
          v-for="(value ,index) in justifyContent"
          :key="index"
          :label="value"></el-radio>
      </div>
      <div class="key-value">
        <span class="key">align-items:</span>
        <el-radio v-model="containerStyle['align-items']"
          v-for="(value ,index) in alignItems" :key="index"
          :label="value"></el-radio>
      </div>
      <div class="key-value">
        <span class="key">align-content:</span>
        <el-radio v-model="containerStyle['align-content']"
          v-for="(value ,index) in alignContent" :key="index"
          :label="value"></el-radio>
      </div>
    </div>


    <div class="bottom-border" v-show="choosenItemIndex != -1">
      <p
        class="title">style of item-{{choosenItemIndex+1}}</p>
      <div class="language-css extra-class">
        <pre class="language-css"><code ref="flexItem"></code></pre>
      </div>

      <div class="key-value">
        <span class="key">order:</span>
        <el-radio v-model="choosenItem['order']"
          v-for="(value ,index) in order" :key="index"
          :label="value"></el-radio>
      </div>
      <div class="key-value">
        <span class="key">flex-grow:</span>
        <el-radio v-model="choosenItem['flex-grow']"
          v-for="(value ,index) in flexGrow" :key="index"
          :label="value"></el-radio>
      </div>
      <div class="key-value">
        <span class="key">flex-shrink:</span>
        <el-radio v-model="choosenItem['flex-shrink']"
          v-for="(value ,index) in flexShrink" :key="index"
          :label="value"></el-radio>
      </div>
      <div class="key-value">
        <span class="key">align-self:</span>
        <el-radio v-model="choosenItem['align-self']"
          v-for="(value ,index) in alignSelf" :key="index"
          :label="value"></el-radio>
      </div>
    </div>

  </div>
</template>

<script>
  import Prism from "prismjs";

  export default {
    name: 'flex',
    data() {
      return {
        containerStyle: {
          'flex-direction': 'row',
          'flex-wrap': 'nowrap',
          'justify-content': 'flex-start',
          'align-items': 'flex-start',
          'align-content': 'flex-start',
        },
        itemStyles: [
          {
            'order': 0,
            'flex-grow': 0,
            'flex-shrink': 1,
            'flex-basis': 'auto',
            'align-self': 'stretch',
          },
          {
            'order': 0,
            'flex-grow': 0,
            'flex-shrink': 1,
            'flex-basis': 'auto',
            'align-self': 'stretch',
          },
          {
            'order': 0,
            'flex-grow': 0,
            'flex-shrink': 1,
            'flex-basis': 'auto',
            'align-self': 'stretch',
          },
          {
            'order': 0,
            'flex-grow': 0,
            'flex-shrink': 1,
            'flex-basis': 'auto',
            'align-self': 'stretch',
          },
          {
            'order': 0,
            'flex-grow': 0,
            'flex-shrink': 1,
            'flex-basis': 'auto',
            'align-self': 'stretch',
          },
        ],
        choosenItemIndex: -1,
        choosenItem: {},
        hideTop:false,
        flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
        flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
        justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
        alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
        alignContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
        flexGrow: [0, 1],
        flexShrink: [0, 1],
        alignSelf: ['auto', 'flex-start', 'flex-end', 'center', 'baseline'],
      }
    },
    watch: {
      containerStyle: {
        handler() {
          this.setContainerStyleStr()
        },
        deep: true
      }
    },
    computed: {
      order() {
        let arr = []
        for (let i = 0; i < this.itemStyles.length; i++) {
          arr.push(i)
        }
        return arr
      },
    },
    methods: {
      styleToString(style) {
        let styleStr = ''
        for (let key in style) {
          styleStr += `${key}: ${style[key]};\n`
        }
        return styleStr
      },
      setContainerStyleStr() {
        this.$refs['flexContainer'].innerHTML = Prism.highlight(this.styleToString(this.containerStyle), Prism.languages.css)
      },
      changeItemCss(style, index) {

        this.$refs['flexItem'].innerHTML = Prism.highlight(this.styleToString(style), Prism.languages.css)

        this.choosenItem = style
        this.choosenItemIndex = index
      }
    },
    mounted() {
      this.setContainerStyleStr()
    }
  }
</script>
