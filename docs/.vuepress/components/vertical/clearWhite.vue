<style lang="scss" scoped>
  .container {
    border: 1px solid #00adb5;
    font-size:50px;
    img {
      border: 1px solid #ddd;
    }
  }

  .switch-container {
    margin-top: 15px;
  }
</style>

<template>
  <div class="vertical-container">
    <div class="container">
      <img
        src="../../public/images/favicon.png"
        alt="" :style="{verticalAlign: top ? 'top' : 'baseline'}">
    </div>

    <div class="switch-container">
      <el-switch
        v-model="top"
        active-text="top"
        inactive-text="baseline">
      </el-switch>
    </div>

    <pre class="language-css"><code
      ref="css"></code></pre>
  </div>
</template>

<script>
  import Prism from "prismjs";

  export default {
    name: 'clear-white',
    data() {
      return {
        top: false
      }
    },
    watch: {
      top() {
        this.setStyle()
      }
    },
    methods: {
      setStyle() {
        this.$refs['css'].innerHTML = Prism.highlight(`vertical-align: ${this.top ? 'top' : 'baseline'};`, Prism.languages.css)
      }
    },
    mounted(){
      this.setStyle()
    }

  }
</script>
