// 引入fs文件处理模块
let fs = require("fs");
let path = 'img';
fs.readdir(path, function (err, files) {
  console.log(files);
  files.forEach(function (filename, index) {
    let oldPath = path + '/' + filename;
    let newPath = path + '/' + filename.replace(/副本/g, '');

    // fs.rename(oldPath, newPath, callback)
    fs.rename(oldPath, path + '/' + "vislab_img_" + index + '.png', function (err) {
      if (!err) {
        console.log(filename + '副本替换成功!')
      }
    })
  })
});
