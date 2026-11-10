<style scoped lang="scss">
  .ripple-container {
    width: 100%;
    height: 500px;
    background: #303133;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<template>
  <div class="ripple-container" ref="container">
    <div id="ripple" ref="ripple"></div>
  </div>

</template>

<script>
  import Ripple from './ripple'
  import cover from './Qi.png'

  export default {
    name: 'js-ripple',
    data() {
      return { ripple: null }
    },
    mounted() {
      function detectDeviceType() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
      }

      function getStyle(el, ruleName) {
        return getComputedStyle(el, null).getPropertyValue(ruleName)
      }

      const mobileOption = {
        size: parseInt(getStyle(this.$refs.container, 'width')),
        radius: .25,
        rippeWidth: 2,
        pointRadius: 4,
      }

      this.ripple = new Ripple(this.$refs.ripple, Object.assign({cover: cover}, detectDeviceType() === 'Mobile' ? mobileOption : {}))
      this.ripple.animate()
    },
    beforeUnmount() {
      this.ripple.cancelAnimate()
    }
  }
</script>
