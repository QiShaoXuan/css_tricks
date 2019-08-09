<style scoped lang="scss">
  .key-value {
    .key {
      width: 80px;
    }
    .key-value--item:not(:last-of-type) {
      border-right: 2px solid #ccc;
      padding-right: 10px;
      margin-right: 10px;
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
  }

  .warpper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }

  .hollow-circle-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @mixin hollow-circle-vertical($color,$r,$height,$top) {
    height: $height;
    position: relative;
    background: radial-gradient(circle at right bottom, transparent $r, $color 0) top right / 51% $top no-repeat,
    radial-gradient(circle at left bottom, transparent $r, $color 0) top left / 51% $top no-repeat,
    radial-gradient(circle at right top, transparent $r, $color 0) bottom right / 51% ($height - $top) no-repeat,
    radial-gradient(circle at left top, transparent $r, $color 0) bottom left / 51% ($height - $top) no-repeat;
    &::after {
      content: '';
      width: 100%;
      border: 1px dashed #fff;
      position: absolute;
      left: 0;
      top: $top;
    }
  }

  @mixin hollow-circle-horizontal($width,$height,$color,$r,$left) {
    width: $width;
    height: $height;
    position: relative;
    background: radial-gradient($r*2 circle at $left 0, transparent $r, $color $r) top left / $width 51% no-repeat, radial-gradient($r*2 circle at $left $height/2, transparent $r, $color $r) bottom left / $width 51% no-repeat;
    &::after {
      content: '';
      height: 100%;
      border: 1px dashed #fff;
      position: absolute;
      left: $left;
      top: 0;
    }
  }

  .hollow-circle-horizontal {
    @include hollow-circle-horizontal(300px, 100px, #00adb5, 10px, 60px)
  }

  .hollow-circle-vertical {
    width: 100px;
    @include hollow-circle-vertical(#00adb5, 10px, 200px, 50px)
  }
</style>

<template>
  <div>
    <div class="warpper">
      <div class="hollow-two-circles"></div>
    </div>

    <div class="key-value">
      <span class="key">位置：</span>
      <el-radio v-model="position"
        v-for="(value ,index) in positions" :key="index"
        :label="value"></el-radio>
    </div>
    <div class="key-value">
      <span class="key">宽度：</span>
      <el-input-number v-model="width" size="mini"
        :min="100"
        :max="500" label="宽度"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">长度：</span>
      <el-input-number v-model="height" size="mini"
        :min="50"
        :max="500" label="长度"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">距离：</span>
      <el-input-number v-model="distance" size="mini"
        :min="40"
        :max="200" label="距离"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">半径：</span>
      <el-input-number v-model="radio" size="mini" :min="1"
        :max="20" label="半径"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">虚线：</span>
      <el-switch
        v-model="dashed"
        active-color="#00adb5">
      </el-switch>
      <span style="width:100px"></span>
      <span class="key">阴影：</span>
      <el-switch
        v-model="shadow"
        active-color="#00adb5">
      </el-switch>
    </div>

    <div class="language-css extra-class">
         <pre class="language-css"><code
           ref="css"></code></pre>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hollow-two-circle',
    data() {
      return {
        width: 300,
        height: 100,
        radio: 10,
        dashed: true,
        position: 'horizontal',
        distance: 60,
        positions: ['horizontal', 'vertical'],
        color1: '#00adb5',
        color2: '#eeeeee',
        shadow: true
      }
    },
    computed: {
      style() {
        switch (this.position) {
          case 'horizontal':
            return `.hollow-two-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color1} 0) top left / ${this.distance}px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) bottom left /${this.distance}px 51% no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) top right /${this.width - this.distance}px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color2} 0) bottom right /${this.width - this.distance}px 51% no-repeat;
   ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}

${this.dashed ? `.hollow-two-circles::after {
  content: '';
  height: ${this.height - this.radio * 2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: ${this.distance}px;
  top: 0;
  bottom: 0;
  margin: auto;
}` : ''}
`
          case 'vertical':
            return `.hollow-two-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) top right / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color1} 0) top left / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color2} 0) bottom right / 51% ${this.height - this.distance}px no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) bottom left / 51% ${this.height - this.distance}px no-repeat;
   ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}

${this.dashed ? `.hollow-two-circles::after {
  content: '';
  width: ${this.width - this.radio * 2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: ${this.distance}px;
  margin: auto;
}` : ''}
`
        }
      }
    },
    watch: {
      style() {
        this.setStyle()
        this.setStyleToBody()
      }
    },
    methods: {
      setStyle() {
        this.$refs['css'].innerHTML = Prism.highlight(this.style, Prism.languages.css)
      },
      setStyleToBody() {
        let style = document.querySelector('#hollow-two-circles-style')
        style.innerHTML = this.style
      }
    },
    mounted() {
      const style = document.createElement('style')
      style.setAttribute('id', 'hollow-two-circles-style')
      document.head.appendChild(style)

      setTimeout(() => {
        this.setStyle()
        this.setStyleToBody()
      })
    }
  }
</script>
