<style lang="scss">
.grid-container {
  .grid-wrapper {
    border: 1px solid #eee;
    display: grid;
    // grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: 1fr 1fr;
    // grid-column-gap: 4px;
  }
  .grid-item{
    cursor: pointer;
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .tip{
    font-size: 12px;
    color:#aaa;
  }
  .property-value {
    h4{
      margin: 10px 0;
    }
    .value-set {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      flex-wrap: wrap;
      flex-grow: 1;
      margin-bottom: 15px;
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
    .key-value {
      min-height: 26px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
      margin-bottom:10px;
      &.w-100{
        width:100%;
      }
      &.w-50 {
        width: 50%;
      }
      .key {
        text-align: end;
        margin-top: -4px;
        line-height: 1;
      }
      .need-min-width{
        min-width:140px;
      }
      .unit {
        margin-left: 6px;
        margin-top: -4px;
      }
    }
    .btn {
      margin-left: 12px;
    }
    .add-btn {
      margin-top: 6px;
    }
  }
  .btn-container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:10px;
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

        <el-button class="btn add-btn" type="primary" plain size="mini" icon="el-icon-plus" circle @click="addColum"></el-button>
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

        <el-button class="btn add-btn" type="primary" plain size="mini" icon="el-icon-plus" circle @click="addRow"></el-button>
      </div>
    </section>

    <section class="property-value">
      <pre class="language-css"><code ref="gridcolumnGaps"></code></pre>
      <div class="value-set">
        <div class="key-value w-50">
          <span class="key">grid-column-gap:&nbsp;&nbsp;</span>
          <el-input-number :min="0" :max="30" size="mini" v-model="gridcolumnGaps"></el-input-number>
          <span class="unit">px</span>
        </div>
        <div class="key-value w-50">
          <span class="key">grid-row-gap:&nbsp;&nbsp;</span>
          <el-input-number :min="0" :max="30" size="mini" v-model="gridrowGaps"></el-input-number>
          <span class="unit">px</span>
        </div>
      </div>
    </section>
    <!-- <section class="property-value">
      <pre class="language-css"><code ref="justifyContent"></code></pre>
      <div class="value-set">
        <div class="key-value">
          <span class="key">justify-items:&nbsp;&nbsp;</span>
          <el-radio v-model="justifyItem" label="start"></el-radio>
          <el-radio v-model="justifyItem" label="end"></el-radio>
          <el-radio v-model="justifyItem" label="center"></el-radio>
          <el-radio v-model="justifyItem" label="stretch"></el-radio>
        </div>
        <div class="key-value">
          <span class="key">align-items:&nbsp;&nbsp;</span>
          <el-radio v-model="alignItems" label="start"></el-radio>
          <el-radio v-model="alignItems" label="end"></el-radio>
          <el-radio v-model="alignItems" label="center"></el-radio>
          <el-radio v-model="alignItems" label="stretch"></el-radio>
        </div>
      </div>
    </section> -->
    <div class="btn-container">
      <span class="tip">点击 grid-item 以改变其属性</span>
      <el-button type="primary" plain size="mini" @click="addGridItem">增加 grid-item</el-button>
    </div>
    <div class="grid-wrapper" :style={gridTemplateColumns:gridTemplateColumnsCss,gridTemplateRows:gridTemplateRowsCss,gridGap:gridGapCss}>
      <div class="grid-item" v-for="(item,index) in gridItem" :class="'grid-item'+index" :key="index"
        @click="gridItemClick(index)"
        :style={gridColumnStart:item.gridColumnStart,gridColumnEnd:item.gridColumnEnd,gridRowStart:item.gridRowStart,gridRowEnd:item.gridRowEnd,backgroundColor:item.backgroundColor}>
        grid-item-{{item.index}}
      </div>
    </div>
    <section class="property-value" v-if="choosenGridItem">
      <h4>grid-item-{{choosenGridItem.index}}</h4>
      <pre class="language-css"><code ref="gridItem"></code></pre>
      <div class="value-set">
        <div class="key-value w-100">
          <span class="key need-min-width">grid-column-start:&nbsp;&nbsp;</span>
          <el-input-number :min="1" :max="choosenGridItem.gridColumnEnd - 1" size="mini" v-model="choosenGridItem.gridColumnStart"></el-input-number>
        </div>
        <div class="key-value w-100">
          <span class="key need-min-width">grid-column-end:&nbsp;&nbsp;</span>
          <el-input-number :min="choosenGridItem.gridColumnStart + 1" :max="gridTemplateColumns.length + 1" size="mini" v-model="choosenGridItem.gridColumnEnd"></el-input-number>
        </div>
        <div class="key-value w-100 ">
          <span class="key need-min-width">grid-row-start:&nbsp;&nbsp;</span>
          <el-input-number :min="1" :max="choosenGridItem.gridRowEnd - 1" size="mini" v-model="choosenGridItem.gridRowStart"></el-input-number>
        </div>
        <div class="key-value w-100">
          <span class="key need-min-width">grid-row-end:&nbsp;&nbsp;</span>
          <el-input-number :min="choosenGridItem.gridRowStart + 1" :max="gridTemplateRows.length + 1" size="mini" v-model="choosenGridItem.gridRowEnd"></el-input-number>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Prism from "prismjs";

export default {
  name: "grid",
  data() {
    return {
      colors:['#9fe8fa','#26baee','#73d2f3','#fff4e0','#4a9ff5','#5ff4ee','#c2fcf6'],
      gridTemplateColumns: [
        { value: "1", unit: "fr" },
        { value: "1", unit: "fr" },
        { value: "1", unit: "fr" }
      ],
      gridTemplateRows: [
        { value: "40", unit: "px" },
        { value: "40", unit: "px" },
        { value: "40", unit: "px" }
      ],
      gridcolumnGaps: 1,
      gridrowGaps: 1,
      justifyItem: "start",
      alignItems: "start",
      gridItem:[{
        index:1,
        gridColumnStart:1,
        gridColumnEnd:2,
        gridRowStart:1,
        gridRowEnd:2,
        backgroundColor:'#9fe8fa',
      }],
      choosenGridItem:null
    };
  },
  computed: {
    gridTemplateColumnsCss() {
      return this.gridTemplateColumns
        .map(v => (v.value ? `${v.value}${v.unit}` : ""))
        .join(" ");
    },
    gridTemplateRowsCss() {
      return this.gridTemplateRows
        .map(v => (v.value ? `${v.value}${v.unit}` : ""))
        .join(" ");
    },
    gridGapCss() {
      return this.gridcolumnGaps == this.gridrowGaps
        ? `${this.gridcolumnGaps}px`
        : `${this.gridcolumnGaps}px ${this.gridrowGaps}px`;
    },
    gridItemCss(){
      return this.choosenGridItem?`${this.choosenGridItem.gridRowStart} / ${this.choosenGridItem.gridColumnStart} / ${this.choosenGridItem.gridRowEnd} / ${this.choosenGridItem.gridColumnEnd}`:''
    }
  },
  watch: {
    gridTemplateColumnsCss(val) {
      this.updateColumnsCss();
    },
    gridTemplateRowsCss(val) {
      this.updateRowsCss();
    },
    gridGapCss() {
      this.updateGaps();
    },
    gridItemCss(){
      setTimeout(()=>{
        this.updateGridItemCss()
      })
    }
  },
  methods: {
    choosenGridItemChange(){
      if(this.choosenGridItem.gridColumnStart >= this.choosenGridItem.gridColumnEnd){
        this.choosenGridItem.gridColumnStart = this.choosenGridItem.gridColumnEnd - 1
      }
    },
    addGridItem(){
      let color = this.gridItem.length>=this.colors.length?this.colors[(this.gridItem.length%this.colors.length)]:this.colors[this.gridItem.length]
      console.log(this.gridItem.length+1)
      this.gridItem.push({
        index:this.gridItem.length+1,
        gridColumnStart:1,
        gridColumnEnd:2,
        gridRowStart:1,
        gridRowEnd:2,
        backgroundColor:color,
      })
    },
    gridItemClick(index){
      this.choosenGridItem = this.gridItem[index]
    },
    addColum() {
      this.gridTemplateColumns.push(this.gridTemplateColumns[this.gridTemplateColumns.length-1]);
    },
    addRow() {
      this.gridTemplateRows.push(this.gridTemplateRows[this.gridTemplateRows.length-1]);
    },
    delColum(index) {
      this.gridTemplateColumns.splice(index, 1);
    },
    delRow(index) {
      this.gridTemplateRows.splice(index, 1);
    },
    setRepeat(arr) {
      let newArr = [];
      arr.forEach((v, i) => {
        if (i == 0) {
          newArr.push([v]);
        } else {
          if (newArr[newArr.length - 1][0] == v) {
            newArr[newArr.length - 1].push(v);
          } else {
            newArr.push([v]);
          }
        }
      });
      return newArr
        .map(v => (v.length == 1 ? v[0] : `repeat(${v.length}, ${v[0]})`))
        .join(" ");
    },
    updateColumnsCss() {
      this.$refs["gridTemplateColumns"].innerHTML = Prism.highlight(
        `grid-template-columns: ${this.setRepeat(
          this.gridTemplateColumnsCss.split(" ")
        )};`,
        Prism.languages.css
      );
    },
    updateRowsCss() {
      this.$refs["gridTemplateRows"].innerHTML = Prism.highlight(
        `grid-template-rows: ${this.setRepeat(
          this.gridTemplateRowsCss.split(" ")
        )};`,
        Prism.languages.css
      );
    },
    updateGaps() {
      this.$refs["gridcolumnGaps"].innerHTML = Prism.highlight(
        `grid-gap: ${this.gridGapCss};`,
        Prism.languages.css
      );
    },
    updateGridItemCss(){
      this.$refs["gridItem"].innerHTML = Prism.highlight(
        `grid-area: ${this.gridItemCss};`,
        Prism.languages.css
      );
    },
    updateCss() {
      this.updateColumnsCss();
      this.updateRowsCss();
      this.updateGaps();
    }
  },
  mounted() {
    this.updateCss();
  }
};
</script>


