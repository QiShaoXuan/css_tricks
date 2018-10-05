const fs = require('fs')
const findMarkdown = require('./findMarkdown')
const rootDir = './docs'

findMarkdown(rootDir,delComment)

// delComment('./docs/index.md')
function delComment(dir){
    fs.readFile(dir,'utf-8', (err, content) => {
        if (err) throw err

        fs.writeFile(dir, content.replace(/\n \n <comment-comment\/>/g,''), (err) => {
            if (err) throw err
            console.log(`del comment component from ${dir}`)
          })
      })
}