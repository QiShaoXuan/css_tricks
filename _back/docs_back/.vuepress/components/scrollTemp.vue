<style scoped lang="scss">
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
</style>

<template>
  <div class="scroll-container">
    <p class="row" v-for="(value,index) in poem.split('。')">{{value}}</p>
  </div>
</template>

<script>
export default {
  name: "scrollTemp",
  data() {
    return {
      poem:
        "海客談瀛洲，煙濤微茫信難求。越人語天姥，雲霞明滅或可覩。天姥連天向天橫，勢拔五嶽掩赤城。天台四萬八千丈，對此欲倒東南傾。我欲因之夢吳越，一夜飛渡鏡湖月。湖月照我影，送我至剡溪。謝公宿處今尚在，淥水蕩漾清猨啼。腳著謝公屐，身登青雲梯。半壁見海日，空中聞天雞。千巖萬轉路不定，迷花倚石忽已暝。熊咆龍吟殷巖泉，慄深林兮驚層巔。雲青青兮欲雨，水澹澹兮生煙。列缺霹靂，丘巒崩摧。洞天石扉，訇然中開。青冥浩蕩不見底，日月照耀金銀臺。霓爲衣兮風爲馬，雲之君兮紛紛而來下。虎鼓瑟兮鸞迴車，仙之人兮列如麻。忽魂悸以魄動，怳驚起而長嗟。惟覺時之枕席，失向來之煙霞。世間行樂亦如此，古來萬事東流水。別君去兮何時還？且放白鹿青崖間，須行即騎訪名山。安能摧眉折腰事權貴，使我不得開心顏。"
    }
  }
};
</script>
