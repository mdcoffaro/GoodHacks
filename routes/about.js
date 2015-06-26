var express = require('express');
var router = express.Router();

/* GET development page. */
router.get('/', function(req, res, next) {
  res.send('about')
});

/* POST registered students to DB*/
router.post('', function(req, res) {
	var db = req.db;

	console.log("post in about");
});

module.exports = router;
