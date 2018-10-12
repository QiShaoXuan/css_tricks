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
    .title {
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
          <div class="square">
            <label for="n" class="direction-label"><input type="radio" v-model="direction" name="direction" id="n" value="n"></label>
            <label for="s" class="direction-label"><input type="radio" v-model="direction" name="direction" id="s" value="s"></label>
            <label for="w" class="direction-label"><input type="radio" v-model="direction" name="direction" id="w" value="w"></label>
            <label for="e" class="direction-label"><input type="radio" v-model="direction" name="direction" id="e" value="e"></label>
          </div>

          <div class="square rotate">
            <label for="nw" class="direction-label"><input type="radio" v-model="direction" name="direction" id="nw" value="n,w"></label>
            <label for="sw" class="direction-label"><input type="radio" v-model="direction" name="direction" id="sw" value="s,w"></label>
            <label for="ne" class="direction-label"><input type="radio" v-model="direction" name="direction" id="ne" value="n,e"></label>
            <label for="se" class="direction-label"><input type="radio" v-model="direction" name="direction" id="se" value="s,e"></label>
          </div>
        </div>
      </section>
      <section class="size-section">
        <h4>大小</h4>
        <span>宽度</span>
        <el-slider v-model="width" :min="0" :max="300"
          show-input input-size='mini'></el-slider>
        <span>高度</span>
        <el-slider v-model="height" :min="0" :max="300"
          show-input input-size='mini'></el-slider>
        <!-- <span>高度</span>
        <el-slider v-model="height"   disabled :min="0" :max="300" show-input input-size='mini'></el-slider> -->
      </section>
    </div>
  </div>

</template>

<script>
// 上 n
// 下 s
// 左上 nw
// 左下 sw
// 左 w
// 右 e
// 右上 ne
// 右下 se
export default {
  name: "createTriangle",
  data() {
    return {
      color: "#00adb5",
      width: 100,
      height: 100,
      direction: "n",
      sizeArr: ["0", "100px", "100px", "100px"],
      colorArr: ["transparent", "transparent", "#007bff", "transparent"]
    };
  },
  watch: {},
  methods: {
    setStyle(dir) {
      switch (dir) {
        case "n":
          this.sizeArr= ["0", "100px", "100px", "100px"],
          this.colorArr= ["transparent", "transparent", "#007bff", "transparent"]
          break
        case "s":
          this.sizeArr= [],
          this.colorArr= ["transparent", "transparent", "#007bff", "transparent"]
          break
      }
    }
  }
};
</script>
