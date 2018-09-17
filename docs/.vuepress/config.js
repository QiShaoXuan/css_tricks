module.exports = {
  title: 'css tricks',
  description: 'some css tricks, 一些常用的css样式, 一点css技巧',
  dest: './dist',    // 设置输出目录
  base:'/css_tricks/',
  repo: 'https://qishaoxuan.github.io/css_tricks/', // 添加 github 链接
  themeConfig: {
    // nav: [
    //    { text: 'github', link: '/' },
    // ],
    sidebar: [
      ['/', 'Home'],
      ['/reset/', 'reset'],
      ['/accordion/', '手风琴']
    ]
  }
}
