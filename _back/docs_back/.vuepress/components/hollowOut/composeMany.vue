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
      <div class="hollow-compose-many-circles"></div>
    </div>

    <div class="key-value">
      <span class="key">位置：</span>
      <el-radio v-model="position"
        v-for="(value ,index) in positions" :key="index"
        :label="value"></el-radio>
    </div>
    <div class="key-value">
      <span class="key">组合半径：</span>
      <el-input-number v-model="composeRadio" size="mini"
        :min="1"
        :max="10" label="半径"></el-input-number>
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
        shadow: true,
        composeRadio: 5,
        composePositionH: 'right',
        composePositionV: 'bottom',
        composePositionsHorizontal: ['left', 'right'],
        composePositionsVertical: ['top', 'bottom']
      }
    },
    computed: {
      style() {
        let afterStlye = ''
        let circlePosition = ''
        let afterComputedStyle = ''
        let afterColor = this.composePositionH === 'left' ? this.color1 : this.color2
        let to = ''
        const backgroundSize = this.position === 'vertical' && (this.composePositionV === 'top' || this.composePositionV === 'bottom') ? `${this.composeRadio * 3}px ${this.composeRadio}px;` : `${this.composeRadio}px ${this.composeRadio * 3}px;`
        if (this.position === 'vertical') {
          switch (this.composePositionV) {
            case 'top':
              to = 'to right'
              afterColor = this.color1
              afterStlye = `height: ${this.composeRadio}px;
  width:100%;
  left: 0;
  top: ${this.composeRadio * -1}px;`
              circlePosition = `${this.composeRadio * 2}px 0px`
              break
            case 'bottom':
              to = 'to right'
              afterColor = this.color2
              afterStlye = `height: ${this.composeRadio}px;
  width:100%;
  left: 0;
  bottom: ${this.composeRadio * -1}px;`
              circlePosition = `${this.composeRadio * 2}px ${this.composeRadio}px`
              break
          }
        }
        if (this.position === 'horizontal') {
          switch (this.composePositionH) {
            case 'left':
              to = 'to bottom'
              afterColor = this.color1
              afterStlye = `height: 100%;
  width:${this.composeRadio}px;
  top: 0;
  left: ${this.composeRadio * -1}px;`
              circlePosition = `0px ${this.composeRadio * 2}px`
              break
            case 'right':
              to = 'to bottom'
              afterColor = this.color2
              afterStlye = `height: 100%;
  width:${this.composeRadio}px;
  top: 0;
  right: ${this.composeRadio * -1}px;`
              circlePosition = `${this.composeRadio}px ${this.composeRadio * 2}px`
              break
          }
        }

        afterComputedStyle = `.hollow-compose-many-circles::after {
  content: '';
  position: absolute;
  ${afterStlye}
  background-image: linear-gradient(${to}, ${afterColor} ${this.composeRadio}px, transparent ${this.composeRadio}px, transparent),
  radial-gradient(${this.composeRadio * 2}px circle at ${circlePosition}, transparent ${this.composeRadio}px, ${afterColor} ${this.composeRadio }px);
  background-size: ${backgroundSize}
  }`


        // --------------------  ----------------------

        // -------------------- END -  ----------------------
        switch (this.position) {
          case 'horizontal':
            return `.hollow-compose-many-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color1} 0) top left / ${this.distance}px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) bottom left /${this.distance}px 51% no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) top right /${this.width - this.distance}px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color2} 0) bottom right /${this.width - this.distance}px 51% no-repeat;
   ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}

${this.dashed ? `.hollow-compose-many-circles::before {
  content: '';
  height: ${this.height - this.radio * 2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: ${this.distance}px;
  top: 0;
  bottom: 0;
  margin: auto;
}` : ''}

${afterComputedStyle}
`
          case 'vertical':
            return `.hollow-compose-many-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) top right / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color1} 0) top left / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color2} 0) bottom right / 51% ${this.height - this.distance}px no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) bottom left / 51% ${this.height - this.distance}px no-repeat;
   ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}

${this.dashed ? `.hollow-compose-many-circles::before {
  content: '';
  width: ${this.width - this.radio * 2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: ${this.distance}px;
  margin: auto;
}` : ''}

${afterComputedStyle}
`
        }
      },
    },

    watch: {
      style() {
        this.setStyle()
        this.setStyleToBody()
      }
    }
    ,
    methods: {
      setStyle() {
        this.$refs['css'].innerHTML = Prism.highlight(this.style, Prism.languages.css)
      }
      ,
      setStyleToBody() {
        let style = document.querySelector('#hollow-compose-many-circles-style')
        style.innerHTML = this.style
      }
    }
    ,
    mounted() {
      const style = document.createElement('style')
      style.setAttribute('id', 'hollow-compose-many-circles-style')
      document.head.appendChild(style)

      setTimeout(() => {
        this.setStyle()
        this.setStyleToBody()
      })
    }
  }
</script>
