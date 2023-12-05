<style scoped lang="scss">
  .long-text-container {
    width: 200px;
    margin: 0 auto;
    border: 1px solid #ddd;
    height: 100px;

    white-space: pre-line;
    word-wrap: break-word;
  }
</style>

<template>
  <div class="long-text-container">
    <span>https://qishaoxuan.github.io/css_tricks/longText</span>
  </div>
</template>

<script>
  export default {
    name: 'longText',
    data() {
      return {}
    }
  }
</script>
