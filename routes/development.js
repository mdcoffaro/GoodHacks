var express = require('express');
var router = express.Router();

/* GET development page. */
router.get('/', function(req, res, next) {
  res.send('devpage')
});

module.exports = router;
