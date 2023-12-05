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
            dominant-baseline="baseline"
            :font-size="fontsize"
            :y="y"
            style="line-height: 1; vertical-align: middle;"
          >
            {{ content.slice(0, 70) }}
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
        size="mini"
        v-model="fontsize"
        :min="3"
        :max="12"
      ></el-input-number>
    </div>

    <div class="code language-css extra-class">
      <pre class="language-css"><code ref="code"></code></pre>
    </div>
  </div>
</template>

<script>
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
function getSvgTemplate(fontsize,width, height, y, content) {
  return `<svg width="${width===null?1000:width}" height="${height}">
  <text
    dominant-baseline="baseline"
    font-size="${fontsize}"
    y="${y}"
    style="line-height: 1; vertical-align: middle;"
  >
    ${content}
  </text>
</svg>`;
}
import Prism from "prismjs";

export default {
  name: "small-fontsize",
  data() {
    return {
      fontsize: 10,
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
    width() {
      const div = document.createElement("div");
      div.style =
        "posiiton: fixed;left: -10000px;top: -10000;visibility: hidden;";
      div.id = "small-font-mock-dom";
      div.innerHTML = getSvgTemplate(
        this.fontsize,
        null,
        this.height,
        this.y,
        this.content
      );

      document.body.appendChild(div);

      const width = document
        .querySelector("#small-font-mock-dom text")
        .getBoundingClientRect()["width"];
console.log('width',width)

      // document.body.removeChild(div);

      return width;
    },
    height() {
      return fontsizeHeightMap[this.fontsize];
    }
  },
  methods: {
    setCode() {
      this.$refs["code"].innerHTML = Prism.highlight(
        getSvgTemplate(this.fontsize,this.width, this.height, this.y, this.content),
        Prism.languages.html
      );
    }
  },
  watch: {
    fontsize: function() {
      this.$nextTick(function() {
        this.setCode();
      });
    },
    content: function() {
      this.$nextTick(function() {
        this.setCode();
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.setCode();
    });
  }
};
</script>
