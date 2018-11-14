module.exports = {
  title: 'css tricks',
  description: 'some css tricks, 一些常用的css样式, 一点css技巧',
  dest: './dist', // 设置输出目录
  base: '/css_tricks/',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#00adb5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#00adb5' }],
    ['meta', {name:'description', itemprop: 'description', content: 'some css tricks, 一些常用的css样式, 一点css技巧' }],
    ['meta', { itemprop: 'name', content: 'css_trick' }],
    ['meta', { itemprop: 'image', content: '/css_tricks/images/favicon.png' }],
  ],
  repo: 'https://qishaoxuan.github.io/css_tricks/', // 添加 github 链接
  themeConfig: {
    themeConfig: {
      lastUpdated: 'Last Updated',
    },
    nav: [{
        text: 'js tricks',
        link: 'https://qishaoxuan.github.io/js_tricks/'
      },
      {
        text: 'blog',
        link: 'https://qishaoxuan.github.io/blog/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/QiShaoXuan/css_tricks'
      },
    ],
    sidebar: [
      {
        title: '工具',
        collapsable: false,
        children: [
          ['/createTriangle/', '三角形生成器'],
        ],
      },
      {
        title: '属性',
        collapsable: false,
        children: [
          ['/filter/', '滤镜 filter'],
          ['/flexbox/', 'flexbox'],
          ['/grid/','grid'],
          ['/object/','object-fit, object-position'],
          ['/mixBlendMode/','mix-blend-mode'],
        ]
      },
      {
        title: '动',
        collapsable: false,
        children: [
          ['/accordion/', '手风琴'],
          ['/hover/', '悬停'],
          ['/loading/', '加载动画'],
          ['/spring/', '弹簧动画'],
          ['/parabola/','抛物线']
        ]
      },
      {
        title: '静',
        collapsable: false,
        children: [
          ['/reset/', '清除默认样式'],
          ['/scrollTemp/', '滚动条样式'],
          ['/mdedia/', 'midea 参考'],
          ['/cursor/', '手型'],
          ['/shadow/', '投影'],
          ['/remDpi/', 'rem, dpi 设置'],
          ['/paper/','纸页效果'],
        ]
      },
      {
        title: '技巧',
        collapsable: false,
        children: [
          ['/verticalMiddle/', '垂直居中'],
          ['/bottom/', '底部自适应 Sticky Footer'],
          ['/triangle/', '三角形边框'],
          ['/ellipsis/', '文字超出显示省略号'],
          ['/lineBreak/', '插入换行'],
          ['/glass/', '毛玻璃效果'],
          ['/positionWidth/','绝对定位宽度自动撑开'],
          ['/longText/','长文本折行'],
          ['/textShadow/','文字特效'],
        ]
      },
      // ['/', 'Home'],
    ]
  }
}
