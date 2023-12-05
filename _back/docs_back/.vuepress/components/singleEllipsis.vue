<style scoped lang="scss">
.ellipsis-container {
  .article-container {
    width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 40px;
    line-height:40px;
    margin:15px auto;
    border:1px solid #ddd;
    padding:15px;
  }
}
</style>

<template>
  <div class="ellipsis-container">
    <div class="article-container">海客談瀛洲，煙濤微茫信難求。越人語天姥，雲霞明滅或可覩。天姥連天向天橫，勢拔五嶽掩赤城。天台四萬八千丈，對此欲倒東南傾。我欲因之夢吳越，一夜飛渡鏡湖月。湖月照我影，送我至剡溪。謝公宿處今尚在，淥水蕩漾清猨啼。腳著謝公屐，身登青雲梯。半壁見海日，空中聞天雞。千巖萬轉路不定，迷花倚石忽已暝。熊咆龍吟殷巖泉，慄深林兮驚層巔。雲青青兮欲雨，水澹澹兮生煙。列缺霹靂，丘巒崩摧。洞天石扉，訇然中開。青冥浩蕩不見底，日月照耀金銀臺。霓爲衣兮風爲馬，雲之君兮紛紛而來下。虎鼓瑟兮鸞迴車，仙之人兮列如麻。忽魂悸以魄動，怳驚起而長嗟。惟覺時之枕席，失向來之煙霞。世間行樂亦如此，古來萬事東流水。別君去兮何時還？且放白鹿青崖間，須行即騎訪名山。安能摧眉折腰事權貴，使我不得開心顏。</div>
  </div>
</template>

<script>
export default {
  name: "singleEllipsis",
  data() {
    return {};
  },
}
</script>
