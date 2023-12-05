<style scoped lang="scss">
.position-container {
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  label {
    width: 20%;
  }
}
.list-position {
  li {
    margin:0 auto;
    width:50%;
    background: rgba(0, 173, 181, 0.5);
  }
}
</style>

<template>
  <div class="list-position-container">
    <ul class="list-position" :style="{listStylePosition:selectedType}">
      <li>行路难，行路难</li>
      <li>多歧路，今安在</li>
      <li>长风破浪会有时，直挂云帆济沧海</li>
    </ul>
    <div class="language-css extra-class">
       <pre class="language-css"
         style="margin-bottom:30px;"><code
         ref="css"></code></pre>
    </div>

    <el-radio-group v-model="selectedType"
      class="position-container">
      <el-radio v-for="po in position" :key="po"
        :label="po">
        {{po}}
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
import Prism from "prismjs";

export default {
  name: "listPostion",
  data() {
    return {
      selectedType: "inside",
      position: ["inside", "outside"]
    };
  },
  watch: {
    selectedType() {
      this.updateCss();
    }
  },
  methods: {
    updateCss() {
      this.$refs["css"].innerHTML = Prism.highlight(
        `list-style-position: ${this.selectedType};`,
        Prism.languages.css
      );
    }
  },
  mounted() {
    this.updateCss();
  }
};
</script>
