module.exports = {
  title: 'css tricks',
  description: 'some css tricks, 一些常用的css样式, 一点css技巧',
  dest: './dist',    // 设置输出目录
  base:'/css_tricks/',
  repo: 'https://qishaoxuan.github.io/css_tricks/', // 添加 github 链接
  themeConfig: {
    nav: [
       { text: 'GitHub', link: 'https://github.com/QiShaoXuan/css_tricks' },
    ],
    sidebar: [
      {
        title: '动',
        collapsable: false,
        children: [
          ['/accordion/', '手风琴'],
          ['/hover/', '悬停'],

        ]
      },
      {
        title: '静',
        collapsable: false,
        children: [
          ['/reset/', '清除默认样式'],
          ['/cursor/','手型'],
          ['/triangle/','三角形边框'],
          ['/shadow/','不规则图形阴影'],
          ['/ellipsis/','文字超出显示省略号'],
          ['/verticalMiddle/','垂直居中'],
          ['/scrollTemp/','滚动条样式'],
          ['/flexbox/', 'Flexbox'],
        ]
      },
      // ['/', 'Home'],

    ]
  }
}
