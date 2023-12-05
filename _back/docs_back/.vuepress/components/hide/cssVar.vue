
<style lang="scss">
// .box {
//   width: 100px;
//   height: 100px;
// }
</style>
<style>

:root {
  --color: blue;
  --color:yellow;
  --width:400;
}
.box {
  height:100px;
  background-color: var(--color);
  width:calc(var(--width) * 1px);
}
</style>



<template>
  <div class="box"></div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>
