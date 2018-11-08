<style scoped lang="scss">
  *{
    box-sizing: border-box;

  }
.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom:100px;

  article {
    padding: 15px;
    min-height: 100%;
    .poem {
      padding-bottom: 62px;
      zoom: 1;
    }
  }
  footer {
    background: #00adb5;
    color: #fff;
    padding: 10px;
    margin-top: -64px;
    box-sizing: border-box;
  }

  .poem-container {
    width: 45%;
    height: 400px;
    border: 1px solid #ddd;
    overflow: auto;
    p {
      line-height: 1.5;
      margin: 0;
    }
  }
}

</style>
<template>
  <div class="container">
    <div class="poem-container">
      <article>
        <el-checkbox style="margin-bottom: 15px;" v-model="hide">隐藏内容</el-checkbox>
        <div class="poem" v-show="!hide">
          <p v-for="(value,index) in poem.split('。')">{{value}}</p>
        </div>
      </article>
      <footer>底部始终在文档末尾，当文档较长时跟随在文档末尾，当文档较短时在窗口底部。</footer>
    </div>


  </div>
</template>

<script>
export default {
  name: "bottomTemp",
  data() {
    return {
      hide:false,
      poem:
        "海客談瀛洲，煙濤微茫信難求。越人語天姥，雲霞明滅或可覩。天姥連天向天橫，勢拔五嶽掩赤城。天台四萬八千丈，對此欲倒東南傾。我欲因之夢吳越，一夜飛渡鏡湖月。湖月照我影，送我至剡溪。謝公宿處今尚在，淥水蕩漾清猨啼。腳著謝公屐，身登青雲梯。半壁見海日，空中聞天雞。千巖萬轉路不定，迷花倚石忽已暝。熊咆龍吟殷巖泉，慄深林兮驚層巔。雲青青兮欲雨，水澹澹兮生煙。列缺霹靂，丘巒崩摧。洞天石扉，訇然中開。青冥浩蕩不見底，日月照耀金銀臺。霓爲衣兮風爲馬，雲之君兮紛紛而來下。虎鼓瑟兮鸞迴車，仙之人兮列如麻。忽魂悸以魄動，怳驚起而長嗟。惟覺時之枕席，失向來之煙霞。世間行樂亦如此，古來萬事東流水。別君去兮何時還？且放白鹿青崖間，須行即騎訪名山。安能摧眉折腰事權貴，使我不得開心顏。"
    };
  }
};
</script>


