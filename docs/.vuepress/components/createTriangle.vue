<style scoped lang="scss">
.createTriangle-container {
  .triangle-container {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    background-image: url(../public/images/transparent.png);
  }

  .tool-box {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
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
          background: #53cde2;
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
            background: #7874f2;
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
    <div class="triangle-container">
      <div class="triangle-demo" :style="{borderWidth:sizeArr.join(' '),borderColor:colorArr.join(' ')}"></div>
    </div>
    <div class="tool-box">
      <section><h4>方向</h4>
        <div class="direction-contianer">
          <div class="placeholder"></div>
          <div class="square rotate">
            <label for="top" class="direction-label" :class="setActive('top')"><input type="radio" v-model="direction" name="direction" id="top" value="top"></label>
            <label for="bottom" class="direction-label" :class="setActive('bottom')"><input type="radio" v-model="direction" name="direction" id="bottom" value="bottom"></label>
            <label for="left" class="direction-label" :class="setActive('left')"><input type="radio" v-model="direction" name="direction" id="left" value="left"></label>
            <label for="right" class="direction-label" :class="setActive('right')"><input type="radio" v-model="direction" name="direction" id="right" value="right"></label>
          </div>

          <div class="square">
            <label for="leftTop" class="direction-label" :class="setActive('leftTop')"><input type="radio" v-model="direction" name="direction" id="leftTop" value="leftTop"></label>
            <label for="leftBottom" class="direction-label" :class="setActive('leftBottom')"><input type="radio" v-model="direction" name="direction" id="leftBottom" value="leftBottom"></label>
            <label for="rightTop" class="direction-label" :class="setActive('rightTop')"><input type="radio" v-model="direction" name="direction" id="rightTop" value="rightTop"></label>
            <label for="rightBottom" class="direction-label" :class="setActive('rightBottom')"><input type="radio" v-model="direction" name="direction" id="rightBottom" value="rightBottom"></label>
          </div>
          {{direction}}
        </div>
      </section>
      <section class="size-section">
        <h4>大小</h4>
        <p>宽度</p>
        <el-input-number v-model="width" :min="0" :max="300" size='mini'></el-input-number>
        <div class="tool-flex">
          <div>
             <p>左</p>
            <el-input-number v-model="left" :min="0" :max="150" size='mini'></el-input-number>
          </div>
          <div>
             <p>右</p>
            <el-input-number v-model="right" :min="0" :max="150" size='mini'></el-input-number>
          </div>
        </div>
          <p>高度</p>
          <el-input-number v-model="height" :min="0" :max="300" size='mini'></el-input-number>
        <div class="tool-flex">
          <div>
            <p>上</p>
            <el-input-number v-model="top" :min="0" :max="150" size='mini'></el-input-number>
          </div>
          <div>
            <p>下</p>
            <el-input-number v-model="bottom" :min="0" :max="150" size='mini'></el-input-number>
          </div>
        </div>
        <!-- <span>高度</span>
        <el-input-number v-model="height"   disabled :min="0" :max="300" show-input input-size='mini'></el-input-number> -->
      </section>
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
const standard = {
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
      color: "#00adb5",
      direction: "top",
      sizeArr: ["0", "100px", "100px", "100px"],
      colorArr: ["transparent", "transparent", "#007bff", "transparent"]
    };
  },
  computed: {
    width: {
      get: function() {
        return this.left + this.right;
      },
      set: function(val) {
        return val;
      }
    },
    height: {
      get: function() {
        return this.top + this.bottom;
      },
      set: function(val) {
        return val;
      }
    }
  },
  watch: {},
  methods: {
    setActive(dir) {
      return dir == this.direction ? "active" : "";
    },
    setColor(){},
    setSize(){
      
    },
    setStyle(dir) {
      let colors = {
        top: "transparent",
        right: "transparent",
        bottom: "transparent",
        left: "transparent"
      };
      
    }
  }
};
</script>
