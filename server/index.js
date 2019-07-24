const express = require('express');
const http = require('http');
const router = express();
//设置跨域访问
router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


router.post('/', (req, res, next) => {
  console.log('Hello World!');
  res.end();
});

router.post('/getHtml', (req, res) => {
  res.send('Hello HTML!')
});


console.log('Listening on port 3000...');
router.listen(3000, () => console.log('Example app listening on port 3000!'));
