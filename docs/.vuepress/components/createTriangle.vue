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
      margin: 0;
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
</style>

<template>
  <div class="createTriangle-container">
    <div class="tool-box">
      <section><h4>方向</h4>
        <div class="direction-contianer">
          <div class="placeholder"></div>
          <div class="square rotate">
            <label for="top" class="direction-label" :class="setActive('top')"><input type="radio" v-model="direction" name="direction" id="top" value="top"></label>
            <label for="right" class="direction-label" :class="setActive('right')"><input type="radio" v-model="direction" name="direction" id="right" value="right"></label>
            <label for="left" class="direction-label" :class="setActive('left')"><input type="radio" v-model="direction" name="direction" id="left" value="left"></label>
            <label for="bottom" class="direction-label" :class="setActive('bottom')"><input type="radio" v-model="direction" name="direction" id="bottom" value="bottom"></label>

          </div>

          <div class="square">
            <label for="leftTop" class="direction-label" :class="setActive('leftTop')"><input type="radio" v-model="direction" name="direction" id="leftTop" value="leftTop"></label>
            <label for="rightTop" class="direction-label" :class="setActive('rightTop')"><input type="radio" v-model="direction" name="direction" id="rightTop" value="rightTop"></label>

            <label for="leftBottom" class="direction-label" :class="setActive('leftBottom')"><input type="radio" v-model="direction" name="direction" id="leftBottom" value="leftBottom"></label>
            <label for="rightBottom" class="direction-label" :class="setActive('rightBottom')"><input type="radio" v-model="direction" name="direction" id="rightBottom" value="rightBottom"></label>
          </div>
          {{direction}}
        </div>
      </section>
      <section>
        <h4>类型</h4>
          <el-radio v-model="type" v-if="showEqu" label="equ">等边</el-radio>
          <el-radio v-model="type" label="iso">等腰</el-radio>
          <el-radio v-model="type" label="sca">不等边</el-radio>
      </section>
      <section class="size-section">
        <h4>大小</h4>
        <p>宽度</p>
        <el-input-number v-model="width" :disabled="widthDisable" :min="0" :max="300" size='mini'></el-input-number>
        <div class="tool-flex">
          <div>
             <p>左</p>
            <el-input-number v-model="left" :disabled="leftDisable" :min="0" :max="150" size='mini'></el-input-number>
          </div>
          <div>
             <p>右</p>
            <el-input-number v-model="right" :disabled="rightDisable" :min="0" :max="150" size='mini'></el-input-number>
          </div>
        </div>
          <p>高度</p>
          <el-input-number v-model="height" :disabled="heightDisable" :min="0" :max="300" size='mini'></el-input-number>
        <div class="tool-flex">
          <div>
            <p>上</p>
            <el-input-number v-model="top" :disabled="topDisable" :min="0" :max="150" size='mini'></el-input-number>
          </div>
          <div>
            <p>下</p>
            <el-input-number v-model="bottom" :disabled="bottomDisable" :min="0" :max="150" size='mini'></el-input-number>
          </div>
        </div>
        <!-- <span>高度</span>
        <el-input-number v-model="height"   disabled :min="0" :max="300" show-input input-size='mini'></el-input-number> -->
      </section>
    </div>
       <div class="triangle-container">
      <div class="triangle-demo" :style="{borderWidth:lengths,borderColor:colors}"></div>
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
  topLeft: "top"
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
        // if (self.attr("id") == "width") {
        //   this.height = this.width;
        // } else if (self.attr("id") == "height") {
        //   this.width = this.height;
        // } else if (this.height != this.width) {
        //   this.height = this.width;
        // }
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
              if (direction == "top" || direction == "bottom") {
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
              } else if (direction == "left" || direction == "right") {
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
      console.log("lengths", lengths);
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
          if (direction == "top" || direction == "bottom") {
            this.widthDisable = false;
            this.heightDisable = true;
            this.leftDisable = true;
            this.rightDisable = true;
            this.topDisable = true;
            this.bottomDisable = true;
          } else if (direction == "left" || direction == "right") {
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
          if (direction == "top" || direction == "bottom") {
            this.widthDisable = true;
            this.heightDisable = false;
            this.leftDisable = false;
            this.rightDisable = false;
            this.topDisable = true;
            this.bottomDisable = true;
          } else if (direction == "left" || direction == "right") {
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
