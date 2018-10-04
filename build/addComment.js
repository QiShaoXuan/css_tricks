const fs = require('fs')
const findMarkdown = require('./findMarkdown')
const rootDir = './docs'

findMarkdown(rootDir, writeComment)

function writeComment(dir) {
  fs.appendFile(dir, '<comment-comment/>', (err) => {
    if (err) throw err
    // console.log(`add comment component  to  ${dir}`)
  })
}
