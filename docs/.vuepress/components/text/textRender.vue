<style scoped lang="scss">
.type-container {
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
  label {
    width: 50%;
    margin: 0;
    padding: 10px 0;
  }
}

.list-container {
  li {
    width: 40%;
    margin: 0 auto;
  }
}
</style>

<template>
  <div class="list-type-container">
    <div class="text-contaienr"><span></span></div>
    <div class="language-css extra-class">
      <pre class="language-css" style="margin-bottom:30px;"><code
            ref="css"></code></pre>
    </div>

    <el-radio-group v-model="selectedType" class="type-container">
      <el-radio v-for="item in type" :key="item" :label="item">{{
        item
      }}</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
import Prism from "prismjs";

export default {
  name: "list-type",
  data() {
    return {
      type: [
        "auto",
        "optimizeSpeed",
        "optimizeLegibility",
        "geometricPrecision"
      ],
      selectedType: "disc"
    };
  },
  computed: {
    selectedTypeObj() {
      return this.type.find(v => v.name === this.selectedType);
    }
  },
  watch: {
    selectedType() {
      this.updateCss();
    }
  },
  methods: {
    updateCss() {
      this.$refs["css"].innerHTML = Prism.highlight(
        `text-render: ${this.selectedType};`,
        Prism.languages.css
      );
    }
  },
  mounted() {
    this.updateCss();
  }
};
</script>
