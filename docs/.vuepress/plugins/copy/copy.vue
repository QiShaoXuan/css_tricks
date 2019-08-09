<style scoped></style>

<template> </template>

<script>
  import ClipboardJS from 'clipboard'
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      const pres = document.querySelectorAll('pre')
      console.log('pres',pres)

    },1000)
  }
};
</script>
