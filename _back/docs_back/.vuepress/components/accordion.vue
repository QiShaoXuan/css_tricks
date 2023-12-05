<style scoped lang="scss">
  .accordion-container {
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .accordion-item {
      list-style: none;
      height: 500px;
      transition: width 0.5s;
      background-repeat: no-repeat;
      background-size: 500px;
      background-position: center center;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &:not(:hover) {
        width: 20%;
      }
      &:hover {
        width: 500px;
        &::after {
          opacity: 1;
        }
      }
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1;
        opacity: 0;
        transition: opacity 0.5s;
      }
      .accordion-title {
        color: #fff;
        font-size: 18px;
        z-index: 2;
      }
    }
  }
</style>
<template>
  <div>
    <ul class="accordion-container">
      <li class="accordion-item"
        v-for="(item,index) in items"
        :style="{'backgroundImage':`url(${item.src})`,width:100/item.length+'%'}">
        <p class="accordion-title">{{item.title}}</p>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "accordion",
    data() {
      return {
        items: [
          {
            title: `${this.__('背景')}1`,
            src: require("../public/images/bg7.jpeg")
          },
          {
            title: `${this.__('背景')}2`,
            src: require("../public/images/bg10.jpeg")
          },
          {
            title: `${this.__('背景')}3`,
            src: require("../public/images/bg9.jpeg")
          },
          {
            title: `${this.__('背景')}4`,
            src: require("../public/images/bg7.jpeg")
          },
          {
            title: `${this.__('背景')}5`,
            src: require("../public/images/bg10.jpeg")
          }
        ]
      };
    }
  };
</script>


