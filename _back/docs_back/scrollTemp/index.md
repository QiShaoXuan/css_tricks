# 滚动条样式

 <scrollTemp/>

 ```scss
 .scroll-container {
  height: 250px;
  border: 1px solid #ddd;
  padding: 15px;
  overflow: auto;
  .row {
    margin: 0;
    line-height: 1.5;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background: white;
  }
  &::-webkit-scrollbar-corner, /* 滚动条角落 */
  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-track {
    border-radius: 4px;
  }
  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    /* 滚动条轨道 */
    background-color: rgba(180, 160, 120, 0.1);
    box-shadow: inset 0 0 1px rgba(180, 160, 120, 0.5);
  }
  &::-webkit-scrollbar-thumb {
    /* 滚动条手柄 */
    background-color: #00adb5;
  }
}
 ```

 > 通过css修改的滚动条样式兼容性很差，建议使用相关插件修改