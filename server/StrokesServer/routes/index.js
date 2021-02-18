var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

router.post('/getHtml', (req, res) => {
  let obj = {
    name: "yy",
    age: 18,
    sex: "n"
  };
  res.send(obj)
});


module.exports = router;
