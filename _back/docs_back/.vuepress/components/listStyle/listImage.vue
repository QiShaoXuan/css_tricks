<style scoped lang="scss">
.list-style-image {
  list-style-image: url(../../public/images/arrow.svg);
  li {
    width: 50%;
    margin: 0 auto;
  }
}
</style>

<template>
<div>
  <ul class="list-style-image" >
    <li>楼阴缺，栏杆影卧东厢月</li>
    <li>东厢月，一天风霜，杏花如雪</li>
  </ul>
  <div class="language-css extra-class">
      <pre class="language-css"
        style="margin-bottom:30px;"><code
        ref="css"></code></pre>
  </div>


</div>
</template>

<script>
import Prism from "prismjs";
export default {
  name: "listImage",
  data() {
    return {};
  },
  methods: {
    updateCss() {
      this.$refs["css"].innerHTML = Prism.highlight(
        `list-style-image: url(../../public/images/arrow.svg);`,
        Prism.languages.css
      );
    }
  },
  mounted() {
    this.updateCss();
  }
};
</script>
