<style lang="scss" scoped>
.compare-container {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-size: 12px;
  margin-bottom: 30px;
  .compare-container__wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  span {
    color: #00adb5;
    margin-right: 5px;
  }
}
.form-item {
  display: flex;
  margin-bottom: 15px;
  align-items: center;

  label {
    font-size: 14px;
    flex-shrink: 0;
    width: 80px;
  }
}
</style>

<template>
  <div>
    <div class="compare-container">
      <div class="compare-container__wrapper">
        <span>12px字号对比</span>
        <svg :width="width" :height="height">
          <text
            ref="previewText"
            dominant-baseline="baseline"
            :font-size="fontsize"
            :y="y"
            style="line-height: 1; vertical-align: middle;"
          >
            {{ previewContent }}
          </text>
        </svg>
      </div>
    </div>

    <div class="form-item">
      <label>Content</label>
      <el-tooltip
        class="item"
        effect="dark"
        content="Less than 70 characters"
        placement="top-end"
      >
        <el-input v-model="content" placeholder="Input content"></el-input>
      </el-tooltip>
    </div>
    <div class="form-item">
      <label>Fontsize</label>

      <el-input-number
        size="small"
        v-model="fontsize"
        :min="3"
        :max="12"
        :precision="0"
        :value-on-clear="10"
      ></el-input-number>
    </div>

    <div class="code language-html extra-class">
      <DemoCopy lang="html" />
      <pre class="language-html"><code ref="code"></code></pre>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";

const fontsizeHeightMap = {
  1: 1.22,
  2: 2.52,
  3: 3.63,
  4: 5.02,
  5: 6.03,
  6: 7.52,
  7: 8.52,
  8: 9.14,
  9: 10.52,
  10: 11.52,
  11: 13.02,
  12: 14
};
function getSvgTemplate(fontsize, width, height, y, content) {
  const escapedContent = content.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `<svg width="${width}" height="${height}">
  <text
    dominant-baseline="baseline"
    font-size="${fontsize}"
    y="${y}"
    style="line-height: 1; vertical-align: middle;"
  >
    ${escapedContent}
  </text>
</svg>`;
}
export default {
  name: "small-fontsize",
  data() {
    return {
      fontsize: 10,
      width: 0,
      content: "千山鸟飞绝 - from hill to hill no bird in flight"
    };
  },
  computed: {
    y() {
      if (this.fontsize < 3) {
        return fontsizeHeightMap[this.fontsize].toFixed(2);
      }
      if (this.fontsize < 4) {
        return (fontsizeHeightMap[this.fontsize] - 1).toFixed(2);
      }
      return (fontsizeHeightMap[this.fontsize] - 2).toFixed(2);
    },
    previewContent() {
      return this.content.slice(0, 70);
    },
    height() {
      return fontsizeHeightMap[this.fontsize];
    }
  },
  methods: {
    updatePreview() {
      this.width = this.$refs.previewText.getComputedTextLength();
      this.$refs["code"].innerHTML = Prism.highlight(
        getSvgTemplate(this.fontsize, this.width, this.height, this.y, this.previewContent),
        Prism.languages.html
      );
    }
  },
  watch: {
    fontsize: { handler: "updatePreview", flush: "post" },
    previewContent: { handler: "updatePreview", flush: "post" }
  },
  mounted() {
    this.updatePreview();
  }
};
</script>
