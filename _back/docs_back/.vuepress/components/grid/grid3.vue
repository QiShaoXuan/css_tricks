<style scoped lang="scss">
.grid3-container {
  margin-top: 30px;
  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 100px);
    border: 1px solid #eeeeee;
  }
  .grid-item {
    grid-row: 1/2;
    grid-column: 1/2;
    background: #00adb5;
    color: #fff;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .key-value {
    margin-bottom: 15px;
  }
}
</style>
<template>
  <div class="grid3-container">

    <div class="grid-wrapper">
      <div class="grid-item" :style="{justifySelf:justify,alignSelf:align}">
        gird-item
      </div>
    </div>

    <div class="language-css extra-class">
      <pre class="language-css"><code ref="placeSelf"></code></pre>

    </div>

    <div class="key-value">
      <span>justify-self:&nbsp;&nbsp;</span>
      <el-radio v-for="(value, index) in value" :key="index" v-model="justify" :label="value"></el-radio>
    </div>
    <div class="key-value">
      <span>align-self:&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <el-radio v-for="(value, index) in value" :key="index" v-model="align" :label="value"></el-radio>
    </div>

  </div>
</template>

<script>
import Prism from "prismjs";

export default {
  name: "grid3",
  data() {
    return {
      value: ["start", "end", "center", "stretch"],
      justify: "stretch",
      align: "stretch"
    };
  },
  watch: {
    justify() {
      this.updateCss();
    },
    align() {
      this.updateCss();
    }
  },
  methods: {
    updateCss() {
      this.$refs["placeSelf"].innerHTML = Prism.highlight(
        `place-self: ${
          this.align == this.justify
            ? `${this.align}`
            : `${this.align} ${this.justify}`
        };`,
        Prism.languages.css
      );
    }
  },
  mounted() {
    this.updateCss();
  }
};
</script>


