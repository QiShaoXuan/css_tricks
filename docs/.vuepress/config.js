const CONFIG = require("../../config");
module.exports = {
  title: "CSS Tricks",
  description: "some CSS tricks, 一些常用的 CSS 样式, 一点 CSS 技巧",
  dest: "./dist", // 设置输出目录
  base: "/css_tricks/",
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
    // [
    //   "meta",
    //   {
    //     name: "description",
    //     itemprop: "description",
    //     content: "some CSS tricks, 一些常用的 CSS 样式, 一点 CSS 技巧"
    //   }
    // ],
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
    "/en/": {
      lang: "en-US",
      title: "CSS Tricks",
      description: "Some CSS tricks, some common CSS styles."
    }
  },
  plugins: [
    require("./plugins/comment/index"),
    require("./plugins/copy/index"),
    // "vuepress-plugin-cat",
    "@vuepress/nprogress",
    [
      "@vuepress/google-analytics",
      {
        ga: CONFIG.ga
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
              ["/zh/createTriangle/", "三角形生成器"],
              ["/zh/sector/", "扇形生成器"]
            ]
          },
          {
            title: "属性",
            collapsable: false,
            children: [
              ["/zh/filter/", "滤镜 filter"],
              ["/zh/flexbox/", "flexbox"],
              ["/zh/grid/", "grid"],
              ["/zh/object/", "object-fit, object-position"],
              ["/zh/mixBlendMode/", "mix-blend-mode"],
              ["/zh/list/", "list-style"]
            ]
          },
          {
            title: "动",
            collapsable: false,
            children: [
              ["/zh/poptip/", "提示气泡"],
              ["/zh/accordion/", "手风琴"],
              ["/zh/hover/", "悬停"],
              ["/zh/loading/", "加载动画"],
              ["/zh/spring/", "弹簧动画"],
              ["/zh/stickyBall/", "粘性球"],
              ["/zh/parabola/", "抛物线"],
              ["/zh/notCSS/ripple", "涟漪"],
              ["/zh/notCSS/wave", "波浪"]
            ]
          },
          {
            title: "静",
            collapsable: false,
            children: [
              ["/zh/reset/", "清除默认样式"],
              ["/zh/scrollTemp/", "滚动条样式"],
              ["/zh/media/", "media 参考"],
              ["/zh/landscapeScreen/", "强制横屏"],
              ["/zh/cursor/", "手型"],
              ["/zh/shadow/", "投影"],
              ["/zh/remDpi/", "rem, dpi 设置"],
              ["/zh/paper/", "纸页效果"]
            ]
          },
          {
            title: "技巧",
            collapsable: false,
            children: [
              ["/zh/verticalMiddle/", "垂直居中"],
              ["/zh/autoHeight/", "高度自动撑满"],
              ["/zh/vertical/", "消除图片间隙 & 图文居中"],
              ["/zh/bottom/", "底部自适应 Sticky Footer"],
              ["/zh/triangle/", "三角形边框"],
              ["/zh/ellipsis/", "文字超出显示省略号"],
              ["/zh/lineBreak/", "插入换行"],
              ["/zh/glass/", "毛玻璃效果"],
              ["/zh/align/", "参数列表自适应对齐"],
              ["/zh/positionWidth/", "绝对定位宽度自动撑开"],
              ["/zh/longText/", "长文本折行"],
              ["/zh/textShadow/", "文字特效"],
              ["/zh/tab/", "tab 栏底部动画"],
              ["/zh/hollowOut/", "圆形镂空"],
              ["/zh/hollowOut/trangle.md", "三角形镂空"],
              ["/zh/polygonLayout/", "多边形布局"]
            ]
          }
        ]
      },
      "/en/": {
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
              ["/en/createTriangle/", "Triangle generator"],
              // ["/en/sector/", "Fan generator"]
            ]
          },
          // {
          //   title: "Attribute",
          //   collapsable: false,
          //   children: [
          //     ["/en/filter/", "Filter"],
          //     ["/en/flexbox/", "Flexbox"],
          //     ["/en/grid/", "Grid"],
          //     ["/en/object/", "object-fit, object-position"],
          //     ["/en/mixBlendMode/", "mix-blend-mode"],
          //     ["/en/list/", "list-style"]
          //   ]
          // },
          // {
          //   title: "Animate",
          //   collapsable: false,
          //   children: [
          //     ["/en/poptip/", "Poptip"],
          //     ["/en/accordion/", "Accordion"],
          //     ["/en/hover/", "Hover"],
          //     ["/en/loading/", "Loading"],
          //     ["/en/spring/", "Spring"],
          //     ["/en/stickyBall/", "Sticky ball"],
          //     ["/en/parabola/", "Parabola"],
          //     ["/en/notCSS/ripple", "Ripple"],
          //     ["/en/notCSS/wave", "Wave"]
          //   ]
          // },
          // {
          //   title: "Static",
          //   collapsable: false,
          //   children: [
          //     ["/en/reset/", "Reset style"],
          //     ["/en/scrollTemp/", "Scroll bar style"],
          //     ["/en/media/", "Media"],
          //     ["/en/landscapeScreen/", "LandscapeScreen"],
          //     ["/en/cursor/", "ursor"],
          //     ["/en/shadow/", "Shadow"],
          //     ["/en/remDpi/", "Setting of rem & dpi"],
          //     ["/en/paper/", "Paper style"]
          //   ]
          // },
          // {
          //   title: "Tricks",
          //   collapsable: false,
          //   children: [
          //     ["/en/verticalMiddle/", "Vertical middle"],
          //     ["/en/autoHeight/", "Auto height"],
          //     ["/en/vertical/", "Clear image empty & Image vertical"],
          //     ["/en/bottom/", "Sticky footer"],
          //     ["/en/triangle/", "Triangle border"],
          //     ["/en/ellipsis/", "Text ellipsis"],
          //     ["/en/lineBreak/", "insert line break"],
          //     ["/en/glass/", "Ground glass"],
          //     ["/en/align/", "Params layout"],
          //     ["/en/positionWidth/", "Auto width in absoulte position"],
          //     ["/en/longText/", "Berak line in long text"],
          //     ["/en/textShadow/", "Text shadow"],
          //     ["/en/tab/", "Tab animate"],
          //     ["/en/hollowOut/", "Circle hollowout"],
          //     ["/en/hollowOut/trangle.md", "Trangle hollowout"],
          //     ["/en/polygonLayout/", "Polygon layout"]
          //   ]
          // }
        ]
      }
    }
  }
};
