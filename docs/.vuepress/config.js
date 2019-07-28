module.exports = {
  title: "CSS Tricks",
  description: "some CSS tricks, 一些常用的 CSS 样式, 一点 CSS 技巧",
  dest: "./dist", // 设置输出目录
  base: "/css_tricks/",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.png" }],
    ["meta", { name: "theme-color", content: "#00adb5" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#00adb5" }],
    [
      "meta",
      {
        name: "description",
        itemprop: "description",
        content: "some CSS tricks, 一些常用的 CSS 样式, 一点 CSS 技巧"
      }
    ],
    ["meta", { itemprop: "name", content: "CSSTricks" }],
    ["meta", { itemprop: "image", content: "/css_tricks/images/favicon.png" }]
  ],
  repo: "https://github.com/QiShaoXuan/css_tricks", // 添加 github 链接
  themeConfig: {
    themeConfig: {
      lastUpdated: "Last Updated"
    },
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
    sidebar: [
      {
        title: "工具",
        collapsable: false,
        children: [
          ["/createTriangle/", "三角形生成器"],
          ["/sector/", "扇形生成器"]
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
          ["/paper/", "纸页效果"]
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
          ["/hollowOut/", "圆形镂空"],
          ["/hollowOut/trangle.md", "三角形镂空"],
          ["/polygonLayout/", "多边形布局"]
        ]
      }
    ]
  }
};
