var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/*GET register page. */
router.get('/register', function(req, res, next) {
	res.render('register.html');
});

/*GET about page. */
router.get('/about', function(req, res, next) {
	res.render('about.html');
});

/*GET student profile page */
router.get('/studentProfile', function(req, res) {
	res.render('studentProfile', { name: 'Michael Coffaro' });
})

/*GET student profile page */
router.get('/sponsorProfile', function(req, res, next) {
	res.render('sponsorProfile.html');
})


module.exports = router;
