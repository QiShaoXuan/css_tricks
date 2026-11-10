<style scoped lang="scss">
  .align-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:60px;
  }

  .params-container {
    display: table;
    border: 1px solid #ddd;
    .param-item {
      display: table-row;

    }
    .key {
      display: table-cell;
      padding: 10px;
    }
    .param-cell {
      display: table-cell;
      padding: 10px;
    }
    .font-bold {
      font-weight: bold;
    }
  }
</style>

<template>
  <div class="align-container">
    <div class="params-container">
      <div class="param-item">
        <div class="param-cell font-bold">key</div>
        <div class="param-cell font-bold">value</div>
      </div>
      <div class="param-item" v-for="(item,index) in data"
        :key="index">
        <div class="param-cell">{{item.key}}</div>
        <div class="param-cell">{{item.value}}</div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'align',
    data() {
      return {
        data: [
          {key: 'message', value: '消息文字'},
          {key: 'dangerouslyUseHTMLString', value: '是否将 message 属性作为 HTML 片段处理'},
          {key: 'customClass', value: '自定义类名'},
          {key: 'type', value: '主题'},
        ]
      }
    }
  }
</script>
