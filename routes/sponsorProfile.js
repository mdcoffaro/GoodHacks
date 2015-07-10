var express = require('express');
var router = express.Router();

/* GET development page. */
router.get('/', function(req, res, next) {
  res.send('sponsor_profile')
});

/* POST registered students to DB*/
router.post('', function(req, res) {
	var db = req.db;

	console.log("logging for post");
});

module.exports = router;
