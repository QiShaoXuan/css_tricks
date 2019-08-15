<style scoped lang="scss">
.createTriangle-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .triangle-container {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    background-image: url(../public/images/transparent.png);
  }
  h4 {
    margin-top: 15px;
    margin-bottom: 8px;
    span {
      font-weight: normal;
      font-size: 12px;
      color: #aaa;
    }
  }

  .tool-box {
  }
  .direction-contianer {
    width: 140px;
    height: 140px;
    position: relative;
    .placeholder {
      width: 60px;
      height: 60px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: #fff;
      z-index: 10;
    }
    .square {
      width: 100px;
      height: 100px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: 1;
      .direction-label {
        background: #d1f4fa;
        &:hover {
          background: #53cde2;
        }
        &.active {
          background: #ff1f5a;
        }
      }
      &.rotate {
        width: 85px;
        height: 85px;
        transform: rotate(45deg);
        z-index: 2;
        bottom: 0;
        right: 0;
        margin: auto;
        .direction-label {
          background: #8e98f5;
          &:hover {
            background: #7874f2;
          }
          &.active {
            background: #ff1f5a;
          }
        }
      }
    }
    .direction-label {
      width: 50%;
      height: 50%;
      float: left;
      cursor: pointer;
      transition: all 0.3s;
    }
    input[type="radio"] {
      display: none;
    }
  }
  .triangle-demo {
    width: 0;
    height: 0;
    border-style: solid;
    transition: all 0.3s;
  }

  .size-section {
    width: 400px;
    p {
      margin: 10px 0 6px 0;
    }
  }
  .tool-flex {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    div {
      margin-right: 15px;
    }
  }
}
@media screen and (max-width: 959px) {
  .createTriangle-container {
    position: relative;
    padding-top: 310px;
    .triangle-container {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: auto;
    }
  }

  .tool-box {
  }
}
</style>
<template>
  <div>
    <div class="createTriangle-container">
      <div class="tool-box">
        <section class="tool-flex">
          <div>
            <h4>{{ __("方向") }}</h4>
            <div class="direction-contianer">
              <div class="placeholder"></div>
              <div class="square rotate">
                <label
                  for="top"
                  class="direction-label"
                  :class="setActive('top')"
                  ><input
                    type="radio"
                    v-model="direction"
                    name="direction"
                    id="top"
                    value="top"
                /></label>
                <label
                  for="right"
                  class="direction-label"
                  :class="setActive('right')"
                  ><input
                    type="radio"
                    v-model="direction"
                    name="direction"
                    id="right"
                    value="right"
                /></label>
                <label
                  for="left"
                  class="direction-label"
                  :class="setActive('left')"
                  ><input
                    type="radio"
                    v-model="direction"
                    name="direction"
                    id="left"
                    value="left"
                /></label>
                <label
                  for="bottom"
                  class="direction-label"
                  :class="setActive('bottom')"
                  ><input
                    type="radio"
                    v-model="direction"
                    name="direction"
                    id="bottom"
                    value="bottom"
                /></label>
              </div>

              <div class="square">
                <label
                  for="topLeft"
                  class="direction-label"
                  :class="setActive('topLeft')"
                  ><input
                    type="radio"
                    v-model="direction"
                    name="direction"
                    id="topLeft"
                    value="topLeft"
                /></label>
                <label
                  for="topRight"
                  class="direction-label"
                  :class="setActive('topRight')"
                  ><input
                    type="radio"
                    v-model="direction"
                    name="direction"
                    id="topRight"
                    value="topRight"
                /></label>

                <label
                  for="bottomLeft"
                  class="direction-label"
                  :class="setActive('bottomLeft')"
                  ><input
                    type="radio"
                    v-model="direction"
                    name="direction"
                    id="bottomLeft"
                    value="bottomLeft"
                /></label>
                <label
                  for="bottomRight"
                  class="direction-label"
                  :class="setActive('bottomRight')"
                  ><input
                    type="radio"
                    v-model="direction"
                    name="direction"
                    id="bottomRight"
                    value="bottomRight"
                /></label>
              </div>
              <!-- {{direction}} -->
            </div>
          </div>
          <div>
            <h4>{{__("颜色")}}</h4>
            <el-color-picker
              @change="update"
              v-model="choosenColor"
            ></el-color-picker>
          </div>
        </section>
        <section>
          <h4>{{__("类型")}}</h4>
          <el-radio v-model="type" v-if="showEqu" label="equ">{{ __("等边") }}</el-radio>
          <el-radio v-model="type" label="iso">{{ __("等腰") }}</el-radio>
          <el-radio v-model="type" label="sca">{{ __("不等边") }}</el-radio>
        </section>
        <section class="size-section">
          <h4>{{__("大小")}} <span>{{ __("（更改值后请敲回车）") }}</span></h4>
          <p>{{ __("宽度") }}</p>
          <el-input-number
            @change="update"
            v-model="width"
            :disabled="widthDisable"
            :min="0"
            :max="300"
            size="mini"
          ></el-input-number>
          <div class="tool-flex">
            <div>
              <p>{{ __("左") }}</p>
              <el-input-number
                @change="update"
                v-model="left"
                :disabled="leftDisable"
                :min="0"
                :max="150"
                size="mini"
              ></el-input-number>
            </div>
            <div>
              <p>{{ __("右") }}</p>
              <el-input-number
                @change="update"
                v-model="right"
                :disabled="rightDisable"
                :min="0"
                :max="150"
                size="mini"
              ></el-input-number>
            </div>
          </div>
          <p>{{ __("高度") }}</p>
          <el-input-number
            @change="update"
            v-model="height"
            :disabled="heightDisable"
            :min="0"
            :max="300"
            size="mini"
          ></el-input-number>
          <div class="tool-flex">
            <div>
              <p>{{ __("上") }}</p>
              <el-input-number
                @change="update"
                v-model="top"
                :disabled="topDisable"
                :min="0"
                :max="150"
                size="mini"
              ></el-input-number>
            </div>
            <div>
              <p>{{ __("下") }}</p>
              <el-input-number
                @change="update"
                v-model="bottom"
                :disabled="bottomDisable"
                :min="0"
                :max="150"
                size="mini"
              ></el-input-number>
            </div>
          </div>
        </section>
      </div>
      <div class="triangle-container">
        <div
          class="triangle-demo"
          :style="{ borderWidth: lengths, borderColor: colors }"
        ></div>
      </div>
    </div>
    <div style="width:100%;">
      <h3>CSS</h3>
      <div class="language-css extra-class">
        <pre class="language-css"><code ref="code-container"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
const colorDirection = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right",
  topRight: "right",
  bottomRight: "bottom",
  bottomLeft: "left",
  topLeft: "top",
  code: ""
};
const lengthDirection = {
  top: {
    top: false,
    right: "width-right",
    bottom: "height",
    left: "width-left"
  },
  right: {
    top: "height-top",
    right: false,
    bottom: "height-bottom",
    left: "width"
  },
  bottom: {
    top: "height",
    right: "width-right",
    bottom: false,
    left: "width-left"
  },
  left: {
    top: "height-top",
    right: "width",
    bottom: "height-bottom",
    left: false
  },
  topRight: {
    top: false,
    right: "width",
    bottom: "height",
    left: false
  },
  bottomRight: {
    top: false,
    right: false,
    bottom: "height",
    left: "width"
  },
  bottomLeft: {
    top: "height",
    right: false,
    bottom: false,
    left: "width"
  },
  topLeft: {
    top: "height",
    right: "width",
    bottom: false,
    left: false
  }
};
import Prism from "prismjs";

export default {
  name: "createTriangle",
  data() {
    return {
      type: "iso",
      choosenColor: "#00adb5",
      direction: "top",
      width: 100,
      height: 100,
      left: 50,
      right: 50,
      top: 50,
      bottom: 50,
      showEqu: true,
      lengths: "",
      colors: "",
      widthDisable: false,
      heightDisable: false,
      leftDisable: false,
      rightDisable: false,
      topDisable: false,
      bottomDisable: false
    };
  },
  watch: {
    direction(val) {
      this.changeSetup();
      this.changeSize();
      this.updateCSS();
    },
    type() {
      this.changeSetup();
      this.changeSize();
      this.updateCSS();
    }
  },
  methods: {
    update() {
      this.changeSize();
      this.updateCSS();
    },
    setActive(dir) {
      return dir == this.direction ? "active" : "";
    },
    changeSize() {
      if (
        this.direction == "top" ||
        this.direction == "bottom" ||
        this.direction == "left" ||
        this.direction == "right"
      ) {
        if (this.widthDisable) {
          this.width = this.left * 1 + this.right * 1;
        } else {
          this.left = (this.width * 1) / 2;
          this.right = (this.width * 1) / 2;
        }
        if (this.heightDisable) {
          this.height = this.top * 1 + this.bottom * 1;
        } else {
          this.top = (this.height * 1) / 2;
          this.bottom = (this.height * 1) / 2;
        }
      } else if (this.type == "iso") {
        this.left = (this.width * 1) / 2;
        this.right = (this.width * 1) / 2;
        this.top = (this.height * 1) / 2;
        this.bottom = (this.height * 1) / 2;
      }
    },
    updateCSS() {
      let lengths = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
      let colors = {
        top: "transparent",
        right: "transparent",
        bottom: "transparent",
        left: "transparent"
      };
      let lengthDirections = lengthDirection[this.direction];
      colors[colorDirection[this.direction]] = this.choosenColor;
      for (var key in lengthDirections) {
        if (lengthDirections[key] === false) {
          lengths[key] = "0";
        } else {
          switch (this.type) {
            case "equ":
              if (this.direction == "top" || this.direction == "bottom") {
                var equHeight = ((Math.sqrt(3) / 2) * this.width).toFixed(1);
                switch (lengthDirections[key]) {
                  case "width":
                    lengths[key] = equHeight + "px";
                    break;
                  case "height":
                    lengths[key] = equHeight + "px";
                    break;
                  case "width-left":
                    lengths[key] = this.width / 2 + "px";
                    break;
                  case "width-right":
                    lengths[key] = this.width / 2 + "px";
                    break;
                }
              } else if (
                this.direction == "left" ||
                this.direction == "right"
              ) {
                var equHeight = ((Math.sqrt(3) / 2) * this.height).toFixed(1);
                switch (lengthDirections[key]) {
                  case "width":
                    lengths[key] = equHeight + "px";
                    break;
                  case "height":
                    lengths[key] = equHeight + "px";
                    break;
                  case "height-top":
                    lengths[key] = this.height / 2 + "px";
                    break;
                  case "height-bottom":
                    lengths[key] = this.height / 2 + "px";
                    break;
                }
              }
              break;
            case "iso":
              switch (lengthDirections[key]) {
                case "width":
                  lengths[key] = this.width + "px";
                  break;
                case "height":
                  lengths[key] = this.height + "px";
                  break;
                case "width-left":
                  lengths[key] = this.width / 2 + "px";
                  break;
                case "width-right":
                  lengths[key] = this.width / 2 + "px";
                  break;
                case "height-top":
                  lengths[key] = this.height / 2 + "px";
                  break;
                case "height-bottom":
                  lengths[key] = this.height / 2 + "px";
                  break;
              }
              break;
            case "sca":
              switch (lengthDirections[key]) {
                case "width":
                  lengths[key] = this.width + "px";
                  break;
                case "height":
                  lengths[key] = this.height + "px";
                  break;
                case "width-left":
                  lengths[key] = this.left + "px";
                  break;
                case "width-right":
                  lengths[key] = this.right + "px";
                  break;
                case "height-top":
                  lengths[key] = this.top + "px";
                  break;
                case "height-bottom":
                  lengths[key] = this.bottom + "px";
                  break;
              }
              break;
          }
        }
      }

      this.lengths = this.toArray(lengths).join(" ");
      this.colors = this.toArray(colors).join(" ");

      let outputCssStr = `.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${this.lengths};
  border-color: ${this.colors};
}`;
      let cssCode = Prism.highlight(outputCssStr, Prism.languages.css);
      this.$refs["code-container"].innerHTML = cssCode;
    },

    changeSetup() {
      if (
        this.direction == "topRight" ||
        this.direction == "bottomRight" ||
        this.direction == "bottomLeft" ||
        this.direction == "topLeft"
      ) {
        if (this.type == "equ") {
          this.type = "iso";
        }
        this.showEqu = false;
      } else {
        this.showEqu = true;
      }

      switch (this.type) {
        case "equ":
          if (this.direction == "top" || this.direction == "bottom") {
            this.widthDisable = false;
            this.heightDisable = true;
            this.leftDisable = true;
            this.rightDisable = true;
            this.topDisable = true;
            this.bottomDisable = true;
          } else if (this.direction == "left" || this.direction == "right") {
            this.widthDisable = true;
            this.heightDisable = false;
            this.leftDisable = true;
            this.rightDisable = true;
            this.topDisable = true;
            this.bottomDisable = true;
          } else {
            this.widthDisable = false;
            this.heightDisable = false;
            this.leftDisable = true;
            this.rightDisable = true;
            this.topDisable = true;
            this.bottomDisable = true;
          }
          break;
        case "iso":
          this.widthDisable = false;
          this.heightDisable = false;
          this.leftDisable = true;
          this.rightDisable = true;
          this.topDisable = true;
          this.bottomDisable = true;
          break;
        case "sca":
          if (this.direction == "top" || this.direction == "bottom") {
            this.widthDisable = true;
            this.heightDisable = false;
            this.leftDisable = false;
            this.rightDisable = false;
            this.topDisable = true;
            this.bottomDisable = true;
          } else if (this.direction == "left" || this.direction == "right") {
            this.widthDisable = false;
            this.heightDisable = true;
            this.leftDisable = true;
            this.rightDisable = true;
            this.topDisable = false;
            this.bottomDisable = false;
          } else {
            this.widthDisable = false;
            this.heightDisable = false;
            this.leftDisable = true;
            this.rightDisable = true;
            this.topDisable = true;
            this.bottomDisable = true;
          }
          break;
      }
    },
    toArray(obj) {
      var arr = [];
      for (var key in obj) {
        arr.push(obj[key]);
      }
      return arr;
    }
  },
  mounted() {
    this.changeSetup();
    this.changeSize();
    this.updateCSS();
  }
};
</script>
