<style scoped lang="scss">
  main {
    height: 350px;
    background: url(../public/images/bg1.jpg) fixed center -50px / cover no-repeat;
    position: relative;

    section {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: 1;
      width: 80%;
      height: 55%;
      box-sizing: border-box;
      padding: 66px 30px;
      background-color: rgba(255, 255, 255, 0.5);
      font-size: 18px;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        filter: blur(10px);
        background: url(../public/images/bg1.jpg) fixed center -50px / cover no-repeat;
        z-index: -1;
      }
      footer {
        font-size: 14px;
        text-align: right;
      }
    }
  }
</style>

<template>
  <main>
    <section>
      <article>安能摧眉折腰事權貴，使我不得開心顏。</article>
      <footer>--
        <cite>李白 《梦游天姥吟留别》</cite>
      </footer>
    </section>
  </main>
</template>

<script>
  export default {
    name: "glass",
    data() {
      return {};
    }
  };
</script>
