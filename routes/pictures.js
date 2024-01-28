var express = require('express');
var router = express.Router();
const fs = require('fs');
var path = require('path');

router.post('/', function(req, res, next) {
  const file = req.files.file;
  fs.writeFileSync(path.join(__dirname, '../pictures/', file.name), file.data);
  res.end();
});

router.get('/', function(req, res, next) {
  const pictures = fs.readdirSync(path.join(__dirname, '../pictures/'));
  res.render('pictures', { pictures: pictures});
});

module.exports = router;