<style scoped lang="scss">
  section {
    width: 48%;
    display: inline-block;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
    &:nth-of-type(odd) {
      border-right: 1px solid #eee;
    }
    figure {
      margin: 15px;
    }
    figcaption {
      font-size: 18px;
      line-height: 1.5;
      min-height: 120px;
      margin-bottom: 15px;
      p {
        margin: 0;
      }
      p:first-of-type {
        font-weight: bold;
      }
      .note {
        font-size: 14px;
      }
    }
    footer {
      padding: 0 15px;
    }
  }

  @media screen and (max-width: 959px) {
    section {
      width: 100%;
      &:nth-of-type(odd) {
        border-right: none;
      }
    }
  }
</style>

<template>
  <main>
    <div class="container">

      <section>
        <figure>
          <figcaption>
            <p>blur(px)</p>
            <p
              class="note">{{ __("给图像设置高斯模糊。“radius”一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊；如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。") }}</p>
          </figcaption>
          <img src="../public/images/bg1.jpg"
            :style="{filter:`blur(${blur}px)`}">
        </figure>
        <footer>
          <el-slider :min="0" :max="40" v-model="blur"
            input-size="mini" show-input></el-slider>
        </footer>
      </section>

      <section>
        <figure>
          <figcaption>
            <p>contrast(%)</p>
            <p
              class="note">{{ __("调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比。若没有设置值，默认是1。") }}</p>
          </figcaption>
          <img src="../public/images/bg1.jpg"
            :style="{filter:`contrast(${contrast}%)`}">
        </figure>
        <footer>
          <el-slider :min="0" :max="500" v-model="contrast"
            input-size="mini" show-input></el-slider>
        </footer>
      </section>

      <section>
        <figure>
          <figcaption>
            <p>grayscale(%)</p>
            <p
              class="note">{{ __("将图像转换为灰度图像。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0。") }}</p>
          </figcaption>
          <img src="../public/images/bg1.jpg"
            :style="{filter:`grayscale(${grayscale}%)`}">
        </figure>
        <footer>
          <el-slider :min="0" :max="100" v-model="grayscale"
            input-size="mini" show-input></el-slider>
        </footer>
      </section>
      <section>
        <figure>
          <figcaption>
            <p>hue-rotate(deg)</p>
            <p
              class="note">{{ __("给图像应用色相旋转。“angle”一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。") }}</p>
          </figcaption>
          <img src="../public/images/bg1.jpg"
            :style="{filter:`hue-rotate(${hue_rotate}deg)`}">
        </figure>
        <footer>
          <el-slider :min="0" :max="100"
            v-model="hue_rotate" input-size="mini"
            show-input></el-slider>
        </footer>
      </section>

      <section>
        <figure>
          <figcaption>
            <p>sepia(%)</p>
            <p
              class="note">{{ __("将图像转换为深褐色。值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0") }}</p>
          </figcaption>
          <img src="../public/images/bg1.jpg"
            :style="{filter:`sepia(${sepia}%)`}">
        </figure>
        <footer>
          <el-slider :min="0" :max="100" v-model="sepia"
            input-size="mini" show-input></el-slider>
        </footer>
      </section>

      <section>
        <figure>
          <figcaption>
            <p>saturate(%)</p>
            <p
              class="note">{{ __("转换图像饱和度。值定义转换的比例。值为0%则是完全不饱和，值为100%则图像无变化。其他值，则是效果的线性乘子。超过100%的值是允许的，则有更高的饱和度。 若值未设置，值默认是1。") }}</p>
          </figcaption>
          <img src="../public/images/bg1.jpg"
            :style="{filter:`saturate(${saturate}%)`}">
        </figure>
        <footer>
          <el-slider :min="0" :max="200" v-model="saturate"
            input-size="mini" show-input></el-slider>
        </footer>
      </section>

      <section>
        <figure>
          <figcaption>
            <p>brightness(%)</p>
            <p
              class="note">{{ __("给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。") }}</p>
          </figcaption>
          <img src="../public/images/bg1.jpg"
            :style="{filter:`brightness(${brightness}%)`}">
        </figure>
        <footer>
          <el-slider :min="0" :max="400"
            v-model="brightness" input-size="mini"
            show-input></el-slider>
        </footer>
      </section>

      <section>
        <figure>
          <figcaption>
            <p>invert(%)</p>
            <p
              class="note">{{ __("反转输入图像。值定义转换的比例。100%的价值是完全反转。值为0%则图像无变化。值在0%和100%之间，则是效果的线性乘子。 若值未设置，值默认是0。") }}</p>
          </figcaption>
          <img src="../public/images/bg1.jpg"
            :style="{filter:`invert(${invert}%)`}">
        </figure>
        <footer>
          <el-slider :min="0" :max="100" v-model="invert"
            input-size="mini" show-input></el-slider>
        </footer>
      </section>

      <section>
        <figure>
          <figcaption>
            <p>opacity(%)</p>
            <p
              class="note">{{ __("转化图像的透明程度。值定义转换的比例。值为0%则是完全透明，值为100%则图像无变化。值在0%和100%之间，则是效果的线性乘子，也相当于图像样本乘以数量。 若值未设置，值默认是1。") }}</p>
          </figcaption>
          <img src="../public/images/bg1.jpg"
            :style="{filter:`opacity(${opacity}%)`}">
        </figure>
        <footer>
          <el-slider :min="0" :max="100" v-model="opacity"
            input-size="mini" show-input></el-slider>
        </footer>
      </section>

      <section>
        <figure>
          <figcaption>
            <p>drop-shadow</p>
            <p class="note">
              {{ __("给图像设置一个阴影效果。") }}<br/>
              {{ __("效果见") }} <a
              href="/css_tricks/shadow/#不规则图形投影">{{ __("不规则图形投影") }}</a>
            </p>
          </figcaption>
          <img src="../public/images/bg1.jpg"
            style="visibility: hidden;">
        </figure>
        <footer style="visibility: hidden">
          <el-slider :min="0" :max="100" input-size="mini"
            show-input></el-slider>
        </footer>
      </section>
    </div>
  </main>

</template>

<script>
  export default {
    name: "filterTemp",
    data() {
      return {
        blur: 0,
        contrast: 100,
        grayscale: 0,
        hue_rotate: 0,
        sepia: 0,
        saturate: 100,
        brightness: 100,
        invert: 0,
        opacity: 100
      };
    }
  };
</script>
