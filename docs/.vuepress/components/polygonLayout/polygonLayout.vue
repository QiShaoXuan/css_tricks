<style scoped lang="scss">
  .circle{
    width:320px;
    height:320px;
    border-radius: 50%;
    border:1px solid #ddd;
    position: absolute;
    left:0;right:0;
    top:0;bottom:0;
    margin:auto;
  }
  .polygonLayout-container {
    width: 320px;
    height: 450px;
    margin: 0 auto;
    position: relative;
    .polygonLayout {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      .polygonLayout-item {
        width: 60px;
        height: 60px;
        background: #00adb5;
        border-radius: 50%;
        text-align: center;
        line-height: 60px;
        color: #fff;
        position: absolute;
      }
    }
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
    justify-content: center;
    align-items: center;
    margin-bottom:30px;
  }
</style>

<template>
  <div class="container">

    <div class="polygonLayout-container">
      <div class="circle"></div>
      <div class="polygonLayout">
        <div class="polygonLayout-item"
          v-for="(item,index) in position" :key="index"
          :style="{left:`${item.left}px`,top:`${item.top}px`}">
          item-{{index+1}}
        </div>
      </div>
    </div>

    <div class="key-value">
      <span class="key">选择边数:</span>
      <!--不知道为啥不能写 for 循环数字-->
      <el-radio v-model="num" :label="3"></el-radio>
      <el-radio v-model="num" :label="4"></el-radio>
      <el-radio v-model="num" :label="5"></el-radio>
      <el-radio v-model="num" :label="6"></el-radio>
      <el-radio v-model="num" :label="7"></el-radio>
      <el-radio v-model="num" :label="8"></el-radio>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'polygonLayout',
    data() {
      return {
        num: 3,
        maxNum:10
      }
    },
    computed: {
      position() {
        return this.setPolyGonLayout(this.num, 160, {
          width: 60,
          height: 60
        })
      },
    },
    methods: {
      setPolyGonLayout(num, radius, itemSize = {
        width: 0,
        height: 0
      }) {
        if (num < 3) return

        const startAngle = num % 2 === 1 ? 0 : 2 * Math.PI / num / 2
        let position = []

        for (let i = 0; i < num; i++) {
          const angle = i * 2 * Math.PI / num + startAngle

          position.push({
            top: -radius * Math.cos(angle) - itemSize.height / 2,
            left: -radius * Math.sin(angle) - itemSize.width / 2,
          })
        }

        return position
      }
    },
  }
</script>
