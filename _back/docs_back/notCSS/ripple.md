## JS 
:::tip
具体使用请查看 <a href="https://github.com/QiShaoXuan/rhythm-ripple">https://github.com/QiShaoXuan/rhythm-ripple</a>
:::

<ripple-jsRipple/>

```vue
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
    <div id="ripple"></div>
  </div>
</template>

<script>
  import ripple from './ripple'
  import cover from './Qi.png'

  export default {
    name: 'ripple',
    data() {
      return {}
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

      const rd = new Ripple('#ripple', Object.assign({cover: cover}, detectDeviceType() === 'Mobile' ? mobileOption : {}))

      rd.animate()
    }
  }
</script>
```

