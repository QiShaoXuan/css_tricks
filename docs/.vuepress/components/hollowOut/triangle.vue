<style scoped lang="scss">
  .hollow-triangle-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:30px 0;
  }

  @function sqrt($r) {
    $x0: 1;
    $x1: $x0;

    @for $i from 1 through 10 {
      $x1: $x0 - ($x0 * $x0 - abs($r)) / (2 * $x0);
      $x0: $x1;
    }

    @return $x1 * 1px;
  }

  @mixin hollow-triangle-projecture($width,$color) {
    background: linear-gradient(45deg, transparent sqrt($width * $width/2), $color 0) bottom left /50% 100% no-repeat,
    linear-gradient(-45deg, transparent sqrt($width * $width/2), $color 0) bottom right /50% 100% no-repeat;
  }

  @mixin hollow-triangle-sunken($width,$color) {
    background: linear-gradient(-45deg, transparent sqrt($width * $width/2), $color 0) bottom left /50% 100% no-repeat,
    linear-gradient(45deg, transparent sqrt($width * $width/2), $color 0) bottom right /50% 100% no-repeat;
  }

  .hollow-triangle-projecture {
    width: 60px;
    height: 150px;
    @include hollow-triangle-projecture(60, #00adb5)
  }

  .hollow-triangle-sunken {
    width: 60px;
    height: 150px;
    @include hollow-triangle-sunken(60, #00adb5)
  }

</style>

<template>
  <div class="hollow-triangle-container">
    <div class="hollow-triangle-projecture"></div>
    <div class="hollow-triangle-sunken"></div>
  </div>
</template>

<script>
  export default {
    name: 'hollow-triangle',
    data() {
      return {}
    }
  }
</script>
