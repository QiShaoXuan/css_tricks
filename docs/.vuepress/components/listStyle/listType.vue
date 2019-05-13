<style scoped lang="scss">
  .type-container {
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    flex-wrap: wrap;
    label {
      width: 50%;
      margin: 0;
      padding: 10px 0;
    }
  }

  .list-container {
    li {
      width: 40%;
      margin: 0 auto;
    }
  }
</style>

<template>
  <div class="list-type-container">
    <ul class="list-container"
      :style="{listStyleType:selectedType}">
      <li v-for="(item,index) in template" :key="index"><a
        :href='item.href' target="_blank">{{item.name}}</a>
      </li>
    </ul>
    <pre class="language-css"
      style="margin-bottom:30px;"><code
      ref="css"></code></pre>

    <el-radio-group v-model="selectedType"
      class="type-container">
      <el-radio v-for="item in type" :key="item.name"
        :label="item.name">
        {{item.name}} - {{item.comment}}
        <el-tooltip v-if="item.isTest" class="item"
          effect="dark" content="实验属性，谨慎使用" placement="top">
          <img style="margin-bottom:-2px;" width="15"
            src="https://developer.mozilla.org/static/general/flask.6c6c1a459b56.svg"
            alt="">
        </el-tooltip>
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
  import Prism from "prismjs";

  export default {
    name: "list-type",
    data() {
      return {
        type: [
          {
            name: "disc",
            isTest: false,
            comment: "实心圆点 (默认值)"
          },
          {
            name: "circle",
            isTest: false,
            comment: "空心圆点"
          },
          {
            name: "square",
            isTest: false,
            comment: "实心方块"
          },
          {
            name: "decimal",
            isTest: false,
            comment: "十进制阿拉伯数字"
          },
          {
            name: "cjk-decimal",
            isTest: true,
            comment: "中日韩十进制数"
          },
          {
            name: "decimal-leading-zero",
            isTest: false,
            comment: "十进数"
          },
          {
            name: "lower-roman",
            isTest: false,
            comment: "小写罗马数字"
          },
          {
            name: "upper-roman",
            isTest: false,
            comment: "大写罗马数字"
          },
          {
            name: "lower-greek",
            isTest: false,
            comment: "小写希腊数字"
          },
          {
            name: "lower-alpha",
            isTest: false,
            comment: "小写 ASCII"
          },
          {
            name: "lower-latin",
            isTest: false,
            comment: "小写 ASCII（IE7 以下不支持）"
          },
          {
            name: "upper-alpha",
            isTest: false,
            comment: "大写 ASCII"
          },
          {
            name: "upper-latin",
            isTest: false,
            comment: "大写 ASCII（IE7 以下不支持）"
          },
          {
            name: "armenian",
            isTest: false,
            comment: "传统美式数字"
          },
          {
            name: "georgian",
            isTest: false,
            comment: "传统英式数字"
          },
          {
            name: "hebrew",
            isTest: true,
            comment: "传统希伯来数字"
          },
          {
            name: "ethiopic-numeric ",
            isTest: true,
            comment: "埃塞俄比亚数字"
          },
          {
            name: "hiragana",
            isTest: true,
            comment: "平假名数字（日语）"
          },
          {
            name: "katakana",
            isTest: true,
            comment: "片假名数字（日语）"
          },
          {
            name: "hiragana-iroha",
            isTest: true,
            comment: "旧式平假名数字（日语）"
          },
          {
            name: "katakana-iroha",
            isTest: true,
            comment: "旧式平假名数字（日语）"
          },
          {
            name: "japanese-informal",
            isTest: true,
            comment: "日语非正式数字"
          },
          {
            name: "japanese-formal",
            isTest: true,
            comment: "日语数字 "
          },
          {
            name: "korean-hangul-formal",
            isTest: true,
            comment: "韩文数字"
          },
          {
            name: "korean-hanja-informal",
            isTest: true,
            comment: "韩式数字"
          },
          {
            name: "korean-hanja-formal",
            isTest: true,
            comment: "韩式数字（繁体）"
          },
          {
            name: "simp-chinese-informal",
            isTest: true,
            comment: "中文数字"
          },
          {
            name: "cjk-ideographic",
            isTest: true,
            comment: "中文数字"
          },
          {
            name: "simp-chinese-formal",
            isTest: true,
            comment: "大写繁体中文数字"
          },
          {
            name: "trad-chinese-informal",
            isTest: true,
            comment: "繁体中文数字"
          },
          {
            name: "trad-chinese-formal",
            isTest: true,
            comment: "大写繁体中文数字"
          }
        ],
        selectedType: "disc",
        template: [
          {
            href: "https://github.com/QiShaoXuan/css_tricks",
            name: "css_tricks"
          },
          {
            href: "https://github.com/QiShaoXuan/js_tricks",
            name: "js_tricks"
          },
          {
            href: "https://github.com/QiShaoXuan/blog",
            name: "blog"
          },
          {
            href: "https://github.com/QiShaoXuan/animate_resume_ts",
            name: "animate_resume_ts"
          },
          {
            href: "https://github.com/QiShaoXuan/wavejs",
            name: "wavejs"
          },
          {
            href: "https://github.com/QiShaoXuan/rhythm-ripple",
            name: "rhythm-ripple"
          },
          {
            href: "https://github.com/QiShaoXuan/dont-touch-white",
            name: "dont-touch-white"
          },
          {
            href: "https://github.com/QiShaoXuan/log-tree",
            name: "log-tree"
          },
          {
            href: "https://github.com/QiShaoXuan/log-dir-tree",
            name: "log-dir-tree"
          },
          {
            href: "https://github.com/QiShaoXuan/PAnimate",
            name: "PAnimate"
          },
          {
            href: "https://github.com/QiShaoXuan/bundle_email_template",
            name: "bundle_email_template"
          },
          {
            href: "https://github.com/QiShaoXuan/pazzle",
            name: "pazzle"
          },
          {
            href: "https://github.com/QiShaoXuan/particleText",
            name: "particleText"
          },
          {
            href: "https://github.com/QiShaoXuan/vue_tetris",
            name: "vue_tetris"
          },
          {
            href: "https://qishaoxuan.github.io/messyBalls/",
            name: "messyBalls"
          }
        ]
      };
    },
    computed: {
      selectedTypeObj() {
        return this.type.find(v => v.name === this.selectedType);
      }
    },
    watch: {
      selectedType() {
        this.updateCss();
      }
    },
    methods: {
      updateCss() {
        this.$refs["css"].innerHTML = Prism.highlight(
          `list-style-type: ${this.selectedType};`,
          Prism.languages.css
        );
      }
    },
    mounted() {
      this.updateCss();
    }
  };
</script>
