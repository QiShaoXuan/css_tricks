const fs = require('fs');
const path = require('path');

function renameFilesInFolder(folderPath) {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading folder:', err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(folderPath, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Error getting file stats:', err);
          return;
        }

        if (stats.isFile() && file === 'Index.md') {
          const newFilePath = path.join(folderPath, 'index.md');

          fs.rename(filePath, newFilePath, err => {
            if (err) {
              console.error('Error renaming file:', err);
            } else {
              console.log(`Renamed file: ${file} -> Index.md`);
            }
          });
        } else if (stats.isDirectory()) {
          renameFilesInFolder(filePath); // 递归处理子文件夹
        }
      });
    });
  });
}

// 指定要遍历的文件夹路径
const folderPath = '_back/docs_back';

renameFilesInFolder(folderPath);
