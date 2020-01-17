const CONFIG = require("../../config");
module.exports = {
  title: "CSS Tricks",
  description: "some CSS tricks, 一些常用的 CSS 样式, 一点 CSS 技巧",
  dest: "./dist",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.png" }],
    ["meta", { name: "theme-color", content: "#00adb5" }],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#00adb5"
      }
    ],
    [
      "meta",
      {
        name: "description",
        itemprop: "description",
        content: "some CSS tricks, 一些常用的 CSS 样式, 一点 CSS 技巧"
      }
    ],
    ["meta", { itemprop: "name", content: "CSSTricks" }],
    [
      "meta",
      {
        itemprop: "image",
        content: "/css_tricks/images/favicon.png"
      }
    ]
  ],
  repo: "https://github.com/QiShaoXuan/css_tricks",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "CSS Tricks",
      description: "一些常用的 CSS 样式, 一点 CSS 技巧"
    },
    "/_en/": {
      lang: "en-US",
      title: "CSS Tricks",
      description: "Some CSS tricks, some common CSS styles."
    }
  },
  plugins: [
    require("./plugins/comment/index"),
    require("./plugins/copy/index"),
    "vuepress-plugin-cat",
    "@vuepress/nprogress",
    [
      "@vuepress/google-analytics",
      {
        ga: CONFIG.ga
      }
    ],
    [
      "vuepress-plugin-google-adsense",
      {
        google_ad_client: "ca-pub-3591151685475548",
        enable_page_level_ads: true
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: "js tricks",
        link: "https://qishaoxuan.github.io/js_tricks/"
      },
      {
        text: "blog",
        link: "https://qishaoxuan.github.io/blog/"
      },
      {
        text: "GitHub",
        link: "https://github.com/QiShaoXuan/css_tricks"
      }
    ],
    locales: {
      "/": {
        selectText: "Languages",
        label: "中文",
        serviceWorker: {
          updatePopup: {
            message: "内容有更新",
            buttonText: "刷新"
          }
        },
        sidebar: [
          {
            title: "工具",
            collapsable: false,
            children: [
              ["/createTriangle/", "三角形生成器"],
              ["/sector/", "扇形生成器"],
              ["/hollowOut/", " 卡券生成器"],
              ["/smallFont/", "小于 12px 的文字生成器"]
            ]
          },
          {
            title: "属性",
            collapsable: false,
            children: [
              ["/filter/", "滤镜 filter"],
              ["/flexbox/", "flexbox"],
              ["/grid/", "grid"],
              ["/object/", "object-fit, object-position"],
              ["/mixBlendMode/", "mix-blend-mode"],
              ["/list/", "list-style"]
            ]
          },
          {
            title: "动",
            collapsable: false,
            children: [
              ["/poptip/", "提示气泡"],
              ["/accordion/", "手风琴"],
              ["/hover/", "悬停"],
              ["/flash/", "图片闪光"],
              ["/loading/", "加载动画"],
              ["/spring/", "弹簧动画"],
              ["/stickyBall/", "粘性球"],
              ["/parabola/", "抛物线"],
              ["/notCSS/ripple", "涟漪"],
              ["/notCSS/wave", "波浪"]
            ]
          },
          {
            title: "静",
            collapsable: false,
            children: [
              ["/reset/", "清除默认样式"],
              ["/scrollTemp/", "滚动条样式"],
              ["/media/", "media 参考"],
              ["/landscapeScreen/", "强制横屏"],
              ["/cursor/", "手型"],
              ["/shadow/", "投影"],
              ["/remDpi/", "rem, dpi 设置"],
              ["/paper/", "纸页效果"],
              ["/colorShadow/", "彩色阴影"],
            ]
          },
          {
            title: "技巧",
            collapsable: false,
            children: [
              ["/verticalMiddle/", "垂直居中"],
              ["/autoHeight/", "高度自动撑满"],
              ["/vertical/", "消除图片间隙 & 图文居中"],
              ["/bottom/", "底部自适应 Sticky Footer"],
              ["/triangle/", "三角形边框"],
              ["/ellipsis/", "文字超出显示省略号"],
              ["/lineBreak/", "插入换行"],
              ["/glass/", "毛玻璃效果"],
              ["/align/", "参数列表自适应对齐"],
              ["/positionWidth/", "绝对定位宽度自动撑开"],
              ["/longText/", "长文本折行"],
              ["/textShadow/", "文字特效"],
              ["/tab/", "tab 栏底部动画"],
              ["/tab/circle-border.md", "tab 底部圆形边框衔接"],
              ["/hollowOut/", "圆形镂空"],
              ["/hollowOut/trangle.md", "三角形镂空"],
              ["/polygonLayout/", "多边形布局"]
            ]
          }
        ]
      },
      "/_en/": {
        selectText: "语言",
        label: "English",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: [
          {
            title: "Tool",
            collapsable: false,
            children: [
              ["/_en/createTriangle/", "Triangle generator"],
              ["/_en/sector/", "Fan generator"],
              ["/_en/smallFont/", "Less than 12px text generator"],
            ]
          },
          {
            title: "Attribute",
            collapsable: false,
            children: [
              ["/_en/filter/", "Filter"],
              ["/_en/flexbox/", "Flexbox"],
              ["/_en/grid/", "Grid"],
              ["/_en/object/", "object-fit, object-position"],
              ["/_en/mixBlendMode/", "mix-blend-mode"],
              ["/_en/list/", "list-style"]
            ]
          },
          {
            title: "Animate",
            collapsable: false,
            children: [
              ["/_en/poptip/", "Poptip"],
              ["/_en/accordion/", "Accordion"],
              ["/_en/hover/", "Hover"],
              ["/_en/flash/", "Picture flash"],
              ["/_en/loading/", "Loading"],
              ["/_en/spring/", "Spring"],
              ["/_en/stickyBall/", "Sticky ball"],
              ["/_en/parabola/", "Parabola"],
              ["/_en/notCSS/ripple", "Ripple"],
              ["/_en/notCSS/wave", "Wave"]
            ]
          },
          {
            title: "Static",
            collapsable: false,
            children: [
              ["/_en/reset/", "Reset style"],
              ["/_en/scrollTemp/", "Scroll bar style"],
              ["/_en/media/", "Media"],
              ["/_en/landscapeScreen/", "Focus landscape screen"],
              ["/_en/cursor/", "Cursor"],
              ["/_en/shadow/", "Shadow"],
              ["/_en/remDpi/", "Setting of rem & dpi"],
              ["/_en/paper/", "Paper style"],
              ["/_en/colorShadow/", "Color shadow"]
            ]
          },
          {
            title: "Tricks",
            collapsable: false,
            children: [
              ["/_en/verticalMiddle/", "Vertical middle"],
              ["/_en/autoHeight/", "Auto height"],
              ["/_en/vertical/", "Clear image empty & Image vertical"],
              ["/_en/bottom/", "Sticky footer"],
              ["/_en/triangle/", "Triangle border"],
              ["/_en/ellipsis/", "Text ellipsis"],
              ["/_en/lineBreak/", "insert line break"],
              ["/_en/glass/", "Ground glass"],
              ["/_en/align/", "Params layout"],
              ["/_en/positionWidth/", "Auto width in absoulte position"],
              ["/_en/longText/", "Berak line in long text"],
              ["/_en/textShadow/", "Text shadow"],
              ["/_en/tab/", "Tab animate"],
              ["/_en/tab/circle-border.md", "Tab bottom circle convergence"],
              ["/_en/hollowOut/", "Circle hollowout"],
              ["/_en/hollowOut/trangle.md", "Trangle hollowout"],
              ["/_en/polygonLayout/", "Polygon layout"]
            ]
          }
        ]
      }
    }
  }
};
