// 引入fs文件处理模块
var fs = require("fs");
var path = 'img';
fs.readdir(path, function (err, files) {
  console.log(files)
  files.forEach(function (filename, index) {
    var oldPath = path + '/' + filename,
            newPath = path + '/' + filename.replace(/副本/g, '')

    // fs.rename(oldPath, newPath, callback)
    fs.rename(oldPath, path + '/' + "yongdingcheng_img" + index + '.png', function (err) {
      if (!err) {
        console.log(filename + '副本替换成功!')
      }
    })
  })
})