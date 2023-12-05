<style scoped lang="scss">
.object-container {
  img {
    width: 200px;
    height: 200px;
    display: block;
    margin: 0 auto 30px;
    border: 4px solid #ddd;
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
}
</style>

<template>
  <div class="object-container">
    <img
      src="../public/images/bg8.jpeg"
      :style="{ objectFit: fit, objectPosition: position }"
    />

    <div class="language-css extra-class">
      <pre class="language-css"><code
            ref="object"></code></pre>
    </div>

    <div class="key-value">
      <span class="key">object-fit:</span>
      <el-radio
        v-model="fit"
        v-for="(value, index) in fitValue"
        :key="index"
        :label="value"
      ></el-radio>
    </div>
    <div class="key-value">
      <span class="key">object-position:</span>
      <div class="key-value--item">
        <el-radio
          v-model="position1"
          v-for="(value, index) in positionValue1"
          :key="index"
          :label="value"
        ></el-radio>
      </div>
      <div class="key-value--item">
        <el-radio
          v-model="position2"
          v-for="(value, index) in positionValue2"
          :key="index"
          :label="value"
        ></el-radio>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";

export default {
  name: "objectTemp",
  data() {
    return {
      fit: "fill",
      position1: "center",
      position2: "center",
      fitValue: ["fill", "contain", "cover", "none", "scale-down"],
      positionValue1: ["left", "center", "right"],
      positionValue2: ["top", "center", "bottom"]
    };
  },
  computed: {
    position() {
      return `${this.position1} ${this.position2}`;
    }
  },
  watch: {
    fit() {
      this.updateCSS();
    },
    position() {
      this.updateCSS();
    }
  },
  methods: {
    updateCSS() {
      this.$refs["object"].innerHTML = Prism.highlight(
        `object-fit: ${this.fit};\nobject-position: ${this.position}`,
        Prism.languages.css
      );
    }
  },
  mounted() {
    this.updateCSS();
  }
};
</script>
