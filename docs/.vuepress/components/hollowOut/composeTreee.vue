<style scoped lang="scss">
  .key-value {
    .key {
      width: 100px;
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

</style>

<template>
  <div>
    <div class="warpper">
      <div class="hollow-compose-three-circles"></div>
    </div>
    <div class="key-value">
      <span class="key">位置：</span>
      <el-radio v-model="position"
        v-for="(value ,index) in positions" :key="index"
        :label="value"></el-radio>
    </div>
    <div class="key-value">
      <span class="key">组合位置：</span>
      <el-radio v-if="position==='horizontal'"
        v-model="composePositionH"
        v-for="(value ,index) in composePositionsHorizontal"
        :key="index"
        :label="value"></el-radio>
      <el-radio v-if="position==='vertical'"
        v-model="composePositionV"
        v-for="(value ,index) in composePositionsVertical"
        :key="index"
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
  import Prism from "prismjs";

  export default {
    name: 'hollow-compose-three-circles',
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
        shadow: true,
        composePositionH: 'right',
        composePositionV: 'bottom',
        composePositionsHorizontal: ['left', 'right'],
        composePositionsVertical: ['top', 'bottom']
      }
    },
    computed: {
      style() {
        let background = '';
        switch (this.position) {
          case 'horizontal':
            switch (this.composePositionH) {
              case 'right':
                background = `background: radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color1} 0) top left / ${this.distance}px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) bottom left /${this.distance}px 51% no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) ${this.distance}px 0/${this.width - this.distance - this.radio}px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color2} 0) ${this.distance}px ${this.height / 2}px /${this.width - this.distance - this.radio}px 51% no-repeat,
    radial-gradient(circle at ${this.radio}px ${this.height / 2}px, transparent ${this.radio}px, ${this.color2} 0) ${this.width - this.radio}px 0/${this.radio}px ${this.height}px no-repeat;`;
                break;
              case 'left':
                background = `background: radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color1} 0) ${this.radio}px 0 / ${this.distance}px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) ${this.radio}px ${this.height / 2}px /${this.distance}px 51% no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) top right/${this.width - this.distance - this.radio}px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color2} 0) bottom right /${this.width - this.distance - this.radio}px 51% no-repeat,
    radial-gradient(circle at 0 ${this.height / 2}px, transparent ${this.radio}px, ${this.color1} 0) top left/${this.radio}px ${this.height}px no-repeat;`;
                break;
            }


            return `.hollow-compose-three-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  ${background}
   ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}

${this.dashed ? `.hollow-compose-three-circles::after {
  content: '';
  height: ${this.height - this.radio * 2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: ${this.composePositionH === 'left' ? this.distance + this.radio : this.distance}px;
  top: 0;
  bottom: 0;
  margin: auto;
}` : ''}
`
          case 'vertical':
            switch (this.composePositionV) {
              case 'top':
                background = `background: radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) ${this.width / 2}px ${this.radio}px / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color1} 0) 0 ${this.radio}px / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color2} 0) bottom right / 51% ${this.height - this.distance - this.radio}px no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) bottom left / 51% ${this.height - this.distance - this.radio}px no-repeat,
    radial-gradient(circle at ${this.width / 2}px 0, transparent ${this.radio}px, ${this.color1} 0) top left/${this.width}px ${this.radio}px no-repeat;`
                break
              case 'bottom':
                background = `background: radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) ${this.width/2 - 2}px 0 / ${this.width/2 + 2}px ${this.distance}px no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color1} 0) top left / ${this.width/2}px ${this.distance}px no-repeat,
    radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color2} 0) ${this.width/2 - 2}px ${this.distance}px / ${this.width/2 + 2}px ${this.height - this.distance - this.radio}px no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) 0 ${this.distance}px / ${this.width/2}px ${this.height - this.distance - this.radio}px no-repeat,
    radial-gradient(circle at ${this.width / 2}px ${this.radio}px, transparent ${this.radio}px, ${this.color2} 0) bottom left/${this.width}px ${this.radio}px no-repeat;`
                break

            }
            return `.hollow-compose-three-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  ${background}
   ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}

${this.dashed ? `.hollow-compose-three-circles::after {
  content: '';
  width: ${this.width - this.radio * 2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: ${this.composePositionV === 'top' ? this.distance + this.radio : this.distance}px;
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
        let style = document.querySelector('#hollow-compose1')
        style.innerHTML = this.style
      }
    },
    mounted() {
      const style = document.createElement('style')
      style.setAttribute('id', 'hollow-compose1')
      document.head.appendChild(style)

      setTimeout(() => {
        this.setStyle()
        this.setStyleToBody()
      })
    }
  }
</script>
