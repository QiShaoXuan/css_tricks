<style lang="scss">
.grid2-container {
  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 200px);
    grid-template-rows: repeat(2, 100px);
    border: 1px solid #eeeeee;
    height: 250px;
    margin-top:30px;
  }
  .grid-item {
    background: #00adb5;
    color: #fff;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .key-value {
    margin-bottom: 15px;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    .key {
      width: 126px;
      flex-shrink: 0;
    }
    .el-radio {
      margin-left: 0;
      margin-right: 30px;
    }
  }
}
</style>
<template>
  <div class="grid2-container">
    <div class="grid-wrapper" :style="{justifyItems:justifyItems,alignItems:alignItems,justifyContent:justifyContent,alignContent:alignContent}">
      <div class="grid-item" v-for="(item, index) in gridItem" :key="index" :style="{gridColumn:item.column,gridRow:item.row}">
        gird-item{{index+1}}
      </div>
    </div>

    <div class="language-css extra-class">
      <pre class="language-css"><code ref="placeItems"></code></pre>
    </div>

    <div class="key-value">
      <span class="key">justify-items:</span>
      <div>
        <el-radio v-for="(value, index) in value" :key="index" v-model="justifyItems" :label="value"></el-radio>
      </div>
    </div>
    <div class="key-value">
      <span class="key">align-items:</span>
      <div>
        <el-radio v-for="(value, index) in value" :key="index" v-model="alignItems" :label="value"></el-radio>
      </div>
    </div>

    <div class="language-css extra-class">
      <pre class="language-css"><code ref="placeContent"></code></pre>
    </div>

    <div class="key-value">
      <span class="key">justify-content:</span>
      <div>
        <el-radio v-for="(value, index) in value2" :key="index" v-model="justifyContent" :label="value"></el-radio>
      </div>
    </div>
    <div class="key-value">
      <span class="key">align-content:</span>
      <div>
        <el-radio v-for="(value, index) in value2" :key="index" v-model="alignContent" :label="value"></el-radio>
      </div>
    </div>

  </div>
</template>

<script>
import Prism from "prismjs";

export default {
  name: "grid2",
  data() {
    return {
      value: ["start", "end", "center", "stretch"],
      value2: [
        "start",
        "end",
        "center",
        "stretch",
        "space-around",
        "space-between",
        "space-evenly"
      ],
      justifyContent: "start",
      alignContent: "start",
      justifyItems: "stretch",
      alignItems: "stretch",
      gridItem: [
        {
          colum: "1/2",
          row: "1/2"
        },
        {
          colum: "2/3",
          row: "1/2"
        },
        {
          colum: "1/2",
          row: "2/3"
        },
        {
          colum: "2/3",
          row: "2/3"
        }
      ]
    };
  },
  watch: {
    justifyItems() {
      this.updateItemsCss();
    },
    alignItems() {
      this.updateItemsCss();
    },
    justifyContent() {
      this.updateContentCss();
    },
    alignContent() {
      this.updateContentCss();
    }
  },
  methods: {
    updateItemsCss() {
      this.$refs["placeItems"].innerHTML = Prism.highlight(
        `place-items: ${
          this.alignItems == this.justifyItems
            ? `${this.alignItems}`
            : `${this.alignItems} ${this.justifyItems}`
        };`,
        Prism.languages.css
      );
    },
    updateContentCss() {
      this.$refs["placeContent"].innerHTML = Prism.highlight(
        `place-content: ${
          this.alignContent == this.justifyContent
            ? `${this.alignContent}`
            : `${this.alignContent} ${this.justifyContent}`
        };`,
        Prism.languages.css
      );
    }
  },
  mounted() {
    this.updateContentCss();
    this.updateItemsCss();
  }
};
</script>


