<style lang="scss" scoped>
.auto-height-container {
  .el-tag {
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .top-child {
    padding-left: 10px;
    padding-top: 10px;
  }
  button {
    margin-bottom: 10px;
  }
  .bottom-child {
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #ccc;
  }
  .container {
    height: 600px;
    width: 435px;
    margin: 0 auto;
    border: 1px solid #eee;
    // start

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & > * {
      flex-shrink: 0;
      width: 100%;
    }

    .auto-height {
      flex-grow: 1;
      position: relative;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;

      font-size: 16px;
      line-height: 24px;
      text-align: center;
      .auto-height__wrapper {
        width: 100%;
        height: 100%;
        overflow: auto;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>

<template>
  <div class="auto-height-container">
    <div class="container">
      <div class="top-child">
        <el-tag v-for="(item, key) in data" :key="key" :type="types[key % 6]"
          >标签{{ item }}</el-tag
        >

        <el-button
          @click="delType"
          type="primary"
          size="small"
          icon="el-icon-minus"
          circle
        ></el-button>

        <el-button
          @click="addType"
          type="primary"
          size="small"
          icon="el-icon-plus"
          circle
        ></el-button>
      </div>
      <div class="auto-height">
        <div class="auto-height__wrapper">
          潯陽江頭夜送客，楓葉荻花秋瑟瑟。<br />
          主人下馬客在船，舉酒欲飲無管絃。<br />
          醉不成歡慘將別，別時茫茫江浸月。<br />
          忽聞水上琵琶聲，主人忘歸客不發。<br />
          尋聲闇問彈者誰，琵琶聲停欲語遲。<br />
          移船相近邀相見，添酒回燈重開宴。<br />
          千呼萬喚始出來，猶抱琵琶半遮面。<br />
          轉軸撥絃三兩聲，未成曲調先有情。<br />
          絃絃掩抑聲聲思，似訴平生不得志。<br />
          低眉信手續續彈，說盡心中無限事。<br />
          輕攏慢撚抹復挑，初為霓裳後綠腰。<br />
          大絃嘈嘈如急雨，小絃切切如私語。<br />
          嘈嘈切切錯雜彈，大珠小珠落玉盤。<br />
          間關鶯語花底滑，幽咽泉流冰下難。<br />
          冰泉冷澀絃凝絕，凝絕不通聲暫歇。<br />
          別有幽愁闇恨生，此時無聲勝有聲。<br />
          銀瓶乍破水漿迸，鐵騎突出刀槍鳴。<br />
          曲終收撥當心畫，四絃一聲如裂帛。<br />
          東船西舫悄無言，唯見江心秋月白。<br />
          沉吟放撥插絃中，整頓衣裳起斂容。<br />
          自言本是京城女，家在蝦蟆陵下住。<br />
          十三學得琵琶成，名屬教坊第一部。<br />
          曲罷常教善才服，妝成每被秋娘妒。<br />
          五陵年少爭纏頭，一曲紅綃不知數。<br />
          鈿頭銀篦擊節碎，血色羅裙翻酒污。<br />
          今年歡笑復明年，秋月春風等閑度。<br />
          弟走從軍阿姨死，暮去朝來顏色故。<br />
          門前冷落車馬稀，老大嫁作商人婦。<br />
          商人重利輕別離，前月浮梁買茶去。<br />
          去來江口守空船，繞船月明江水寒。<br />
          夜深忽夢少年事，夢啼妝淚紅闌干。<br />
          我聞琵琶已歎息，又聞此語重唧唧。<br />
          同是天涯淪落人，相逢何必曾相識。<br />
          我從去年辭帝京，謫居臥病潯陽城。<br />
          潯陽地僻無音樂，終歲不聞絲竹聲。<br />
          住近湓江地低溼，黃蘆苦竹繞宅生。<br />
          其間旦暮聞何物，杜鵑啼血猿哀鳴。<br />
          春江花朝秋月夜，往往取酒還獨傾。<br />
          豈無山歌與村笛，嘔啞嘲哳難為聽。<br />
          今夜聞君琵琶語，如聽仙樂耳暫明。<br />
          莫辭更坐彈一曲，為君翻作琵琶行。<br />
          感我此言良久立，卻坐促絃絃轉急。<br />
          淒淒不似向前聲，滿座重聞皆掩泣。<br />
          座中泣下誰最多？江州司馬青衫濕。<br />
        </div>
      </div>
      <div class="bottom-child">
        bottom item
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      data: [1, 2, 3],
      types: ["", "success", "info", "warning", "warning", "danger"]
    };
  },
  methods: {
    addType() {
      this.data.push(this.data.length + 1);
    },
    delType() {
      this.data.splice(this.data.length - 1, 1);
    }
  }
};
</script>
