<style scoped lang="scss">
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .tab-container3 {
    border: 1px solid #eee;
    margin: 50px auto;
    padding: 20px 0;
    .title {
      padding-left: 30px;
      font-size: 12px;
      color: #ddd;
    }
    .tabs {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        cursor: pointer;
        position: relative;
        font-size: 18px;
        color: #909399;
        background-color: #fff;
        &::after {
          content: "";
          width: 0;
          height: 2px;
          background-color: #00adb5;
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          bottom: 0;
          transition: width .4s;

        }
      }
      li.active {
        &::after {
          width: 100%;
        }
      }
    }
  }
</style>

<template>
  <div class="tab-container3">
    <div class="title">click to change</div>
    <ul class="tabs">
      <li class="tab-item" v-for="n in 5"
        :class="{active:isActive==n}"
        @click="setActive(n)">tab{{n}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'centerTab',
    data() {
      return {
        isActive: 1
      }
    },
    methods: {
      setActive(index) {
        this.isActive = index
      }
    }
  }
</script>
