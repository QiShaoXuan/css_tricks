const fs = require('fs')
const findMarkdown = require('./findMarkdown')
const rootDir = './docs'

findMarkdown(rootDir,delComponents)

// delComponents('./docs/index.md')
function delComponents(dir){
    fs.readFile(dir,'utf-8', (err, content) => {
        if (err) throw err

        fs.writeFile(dir, content.replace(/\n  <model-cat\/>/g,''), (err) => {
            if (err) throw err
            console.log(`del components from ${dir}`)
          })
      })
}
