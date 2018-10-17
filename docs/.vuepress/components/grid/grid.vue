<style lang="scss">
.grid-container {
  .grid-wrapper {
    border: 1px solid #aaa;
    display: grid;
    // grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: 1fr 1fr;
    grid-template-columns: 50px 50px 100px;
    grid-template-rows: 40px 40px;
  }
  .grid-item {
  }
  .property-value {
    // display: flex;
    // justify-content: flex-start;
    // align-items: center;
    .value-set {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      flex-wrap: wrap;
      flex-grow: 1;
      margin-bottom: 15px;
      margin-top: 9px;
    }
    .value-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 6px;
      margin-right: 5px;
      padding-right: 5px;
      border-right: 2px solid #eee;
      &:last-of-type {
        border-right: none;
      }
      .el-input {
        width: 40px;
      }
      .el-input__inner {
        padding: 0 5px;
        text-align: center;
      }
      .el-radio {
        margin-left: 8px;
      }
      .el-radio__label {
        padding-left: 5px;
      }
    }
    .btn {
      margin-left: 12px;
    }
    .add-btn {
      margin-top: 6px;
    }
  }
}
</style>
<template>
  <div class="grid-container">
    <section class="property-value">
      <pre class="language-css"><code ref="gridTemplateColumns"></code></pre>
      <div class="value-set">
        <div class="value-item" v-for="(item,index) in gridTemplateColumns" :key="index">
          <el-input size="mini"  v-model="item.value"></el-input>
          <el-radio v-model="item.unit" label="fr"></el-radio>
          <el-radio v-model="item.unit" label="px"></el-radio>
          <el-button class="btn" v-if="gridTemplateColumns.length!=1" @click="delColum(index)" plain size="mini" icon="el-icon-minus" circle></el-button>
        </div> 
        
        <el-button class="btn add-btn" plain size="mini" icon="el-icon-plus" circle @click="addColum"></el-button>
      </div>
    </section>
    <section class="property-value">
      <pre class="language-css"><code ref="gridTemplateRows"></code></pre>
      <div class="value-set">
        <div class="value-item" v-for="(item,index) in gridTemplateRows" :key="index">
          <el-input size="mini"  v-model="item.value"></el-input>
          <el-radio v-model="item.unit" label="fr"></el-radio>
          <el-radio v-model="item.unit" label="px"></el-radio>
          <el-button class="btn" v-if="gridTemplateRows.length!=1" @click="delRow(index)" plain size="mini" icon="el-icon-minus" circle></el-button>
        </div> 
        
        <el-button class="btn add-btn" plain size="mini" icon="el-icon-plus" circle @click="addRow"></el-button>
      </div>
    </section>
    <div class="grid-wrapper" :style={gridTemplateColumns:gridTemplateColumnsCss,gridTemplateRows:gridTemplateRowsCss}>
      <div class="grid-item"></div>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  name: "grid",
  data() {
    return {
      radio: 1,
      gridTemplateColumns: [{ value: "1", unit: "fr" },{ value: "1", unit: "fr" },{ value: "1", unit: "fr" }],
      gridTemplateRows: [{ value: "40", unit: "px" },{ value: "40", unit: "px" },{ value: "40", unit: "px" },]
    };
  },
  computed: {
    gridTemplateColumnsCss() {
      return this.gridTemplateColumns.map(v => `${v.value}${v.unit}`).join(" ");
    },
    gridTemplateRowsCss() {
      return this.gridTemplateRows.map(v => `${v.value}${v.unit}`).join(" ");
    },
  },
  watch: {
    gridTemplateColumnsCss(val) {
      this.updateCss();
    },
    gridTemplateRowsCss(val) {
      this.updateCss();
    },
  },
  methods: {
    addColum() {
      this.gridTemplateColumns.push({ value: "1", unit: "fr" });
    },
    addRow() {
      this.gridTemplateRows.push({ value: "1", unit: "fr" });
    },
    delColum(index) {
      this.gridTemplateColumns.splice(index, 1);
    },
    delRow(index) {
      this.gridTemplateRows.splice(index, 1);
    },
    updateCss() {
      this.$refs["gridTemplateColumns"].innerHTML = Prism.highlight(
        `grid-template-columns:${this.gridTemplateColumnsCss};`,
        Prism.languages.css
      );
      this.$refs["gridTemplateRows"].innerHTML = Prism.highlight(
        `grid-template-rows:${this.gridTemplateRowsCss};`,
        Prism.languages.css
      );
    }
  },
  mounted() {
    this.updateCss();
  }
};
</script>


