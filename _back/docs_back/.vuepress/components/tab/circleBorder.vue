<style scoped lang="scss">
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

$radius: 10px;
$bg-color: #eee;
$active-color: #00adb5;
.tab-container2 {
  border: 1px solid #eee;
  margin: 50px auto;
  padding: 20px 0;
  .title {
    padding-left: 30px;
    font-size: 12px;
    color: #ddd;
    margin-bottom: 15px;
  }
  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $active-color;

    li {
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      cursor: pointer;
      position: relative;
      font-size: 18px;
      color: #fff;
      background: $active-color;
      transition: color 0.2s, height 0.2s, margin 0.2s;
      border-radius: $radius;
      position: relative;

      &:not(:first-of-type)::before,
      &:not(:first-of-type)::after {
        content: "";
        bottom: 0;
        width: $radius;
        height: $radius;
        position: absolute;
      }

      &.active {
        color: #909399;
        background: $bg-color;
        height: 50px;
        line-height: 50px;
        margin-top: -10px;
        border-radius: $radius $radius 0 0;
        &::before {
          left: -$radius;
          border-radius: 0 0 $radius 0;
          background: $active-color;
          z-index: 2;
        }
        &::after {
          left: -$radius;
          background: $bg-color;
          z-index: 1;
        }
      }
      &.active + li {
        &::before {
          left: 0;
          background: $bg-color;
        }
        &::after {
          border-radius: 0 0 0 $radius;
          left: 0;
          background: $active-color;
        }
      }
    }
  }
}
</style>

<template>
  <div class="tab-container2">
    <div class="title">click to change</div>
    <ul class="tabs">
      <li
        class="tab-item"
        v-for="n in 5"
        :class="{ active: isActive == n }"
        @click="setActive(n)"
      >
        tab{{ n }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "clickTab",
  data() {
    return {
      isActive: 2
    };
  },
  methods: {
    setActive(index) {
      this.isActive = index;
    }
  }
};
</script>
