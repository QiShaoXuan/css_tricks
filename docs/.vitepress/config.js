module.exports = {
  title: "CSS Tricks",
  description: "some CSS tricks, 一些常用的 CSS 样式, 一点 CSS 技巧",
  dest: "./dist",
  base: "/css_tricks/",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.png" }],
    ["meta", { name: "theme-color", content: "#00adb5" }],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#00adb5",
      },
    ],
    [
      "meta",
      {
        name: "description",
        itemprop: "description",
        content: "some CSS tricks, 一些常用的 CSS 样式, 一点 CSS 技巧",
      },
    ],
    ["meta", { itemprop: "name", content: "CSSTricks" }],
    [
      "meta",
      {
        itemprop: "image",
        content: "/css_tricks/images/favicon.png",
      },
    ],
  ],
  repo: "https://github.com/QiShaoXuan/css_tricks",
  // plugins: [
  //   require("./plugins/comment"),
  //   require("./plugins/copy"),
  //   "vuepress-plugin-cat",
  //   "@vuepress/nprogress",
  //   [
  //     "vuepress-plugin-google-adsense",
  //     {
  //       google_ad_client: "ca-pub-3591151685475548",
  //       enable_page_level_ads: true,
  //     },
  //   ],
  // ],
  themeConfig: {
    nav: [
      {
        text: "js tricks",
        link: "https://qishaoxuan.github.io/js_tricks/",
      },
      {
        text: "blog",
        link: "https://qishaoxuan.github.io/blog/",
      },
      {
        text: "GitHub",
        link: "https://github.com/QiShaoXuan/css_tricks",
      },
    ],
    sidebar: [
      // {
      //   text: "工具",

      //   items: [
      //     {
      //       link: "/createTriangle/",
      //       text: "三角形生成器",
      //     },
      //     {
      //       link: "/sector/",
      //       text: "扇形生成器",
      //     },
      //     {
      //       link: "/hollowOut/",
      //       text: " 卡券生成器",
      //     },
      //     {
      //       link: "/smallFont/",
      //       text: "小于 12px 的文字生成器",
      //     },
      //   ],
      // },
      {
        text: "属性",
        items: [
          //     {
          //       link: "/filter/",
          //       text: "滤镜 filter",
          //     },
          //     {
          //       link: "/flexbox/",
          //       text: "flexbox",
          //     },
          //     {
          //       link: "/grid/",
          //       text: "grid",
          //     },
          //     {
          //       link: "/object/",
          //       text: "object-fit, object-position",
          //     },
          //     {
          //       link: "/mixBlendMode/",
          //       text: "mix-blend-mode",
          //     },
          //     {
          //       link: "/list/",
          //       text: "list-style",
          //     },
          {
            link: "/text/",
            text: "text",
          },
          //   ],
          // },
          // {
          //   text: "动",

          //   items: [
          //     {
          //       link: "/poptip/",
          //       text: "提示气泡",
          //     },
          //     {
          //       link: "/accordion/",
          //       text: "手风琴",
          //     },
          //     {
          //       link: "/hover/",
          //       text: "悬停",
          //     },
          //     {
          //       link: "/flash/",
          //       text: "图片闪光",
          //     },
          //     {
          //       link: "/loading/",
          //       text: "加载动画 loading",
          //     },
          //     {
          //       link: "/spring/",
          //       text: "弹簧动画",
          //     },
          //     {
          //       link: "/stickyBall/",
          //       text: "粘性球",
          //     },
          //     {
          //       link: "/parabola/",
          //       text: "抛物线",
          //     },
          //     {
          //       link: "/notCSS/ripple",
          //       text: "涟漪",
          //     },
          //     {
          //       link: "/notCSS/wave",
          //       text: "波浪",
          //     },
        ],
      },
      {
        text: "静",
        items: [
          {
            link: "/reset/",
            text: "清除默认样式",
          },
          // {
          //   link: "/scrollTemp/",
          //   text: "滚动条样式",
          // },
          {
            link: "/media/",
            text: "media 参考",
          },
          // {
          //   link: "/landscapeScreen/",
          //   text: "强制横屏",
          // },
          // {
          //   link: "/cursor/",
          //   text: "手型",
          // },
          // {
          //   link: "/shadow/",
          //   text: "投影",
          // },
          // {
          //   link: "/remDpi/",
          //   text: "rem, dpi 设置",
          // },
          // {
          //   link: "/paper/",
          //   text: "纸页效果",
          // },
          // {
          //   link: "/colorShadow/",
          //   text: "彩色阴影",
          // },
        ],
      },
      {
        text: "技巧",

        items: [
          {
            link: "/verticalMiddle/",
            text: "垂直居中",
          },
          //     {
          //       link: "/autoHeight/",
          //       text: "高度自动撑满",
          //     },
          //     {
          //       link: "/vertical/",
          //       text: "消除图片间隙 & 图文居中",
          //     },
          //     {
          //       link: "/bottom/",
          //       text: "底部自适应 Sticky Footer",
          //     },
          //     {
          //       link: "/triangle/",
          //       text: "三角形边框",
          //     },
          //     {
          //       link: "/ellipsis/",
          //       text: "文字超出显示省略号",
          //     },
          //     {
          //       link: "/lineBreak/",
          //       text: "插入换行",
          //     },
          //     {
          //       link: "/glass/",
          //       text: "毛玻璃效果",
          //     },
          //     {
          //       link: "/align/",
          //       text: "参数列表自适应对齐",
          //     },
          //     {
          //       link: "/positionWidth/",
          //       text: "绝对定位宽度自动撑开",
          //     },
          //     {
          //       link: "/longText/",
          //       text: "长文本折行",
          //     },
          //     {
          //       link: "/textShadow/",
          //       text: "文字特效",
          //     },
          //     {
          //       link: "/tab/",
          //       text: "tab 栏底部动画",
          //     },
          //     {
          //       link: "/tab/circle-border.md",
          //       text: "tab 底部圆形边框衔接",
          //     },
          //     {
          //       link: "/hollowOut/",
          //       text: "圆形镂空",
          //     },
          //     {
          //       link: "/hollowOut/trangle.md",
          //       text: "三角形镂空",
          //     },
          //     {
          //       link: "/polygonLayout/",
          //       text: "多边形布局",
          //     },
        ],
      },
    ],
  },
};
