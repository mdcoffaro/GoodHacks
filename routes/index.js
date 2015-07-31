var express = require('express');
var router = express.Router();

var Parse = require('parse').Parse;

Parse.initialize("yWusaetgryRjKz5aTG81tzEd4F40e7BSrse5Tpao", "jtBjEknzObCeEh0hYUVmiwTiITQXpKjo4QNigzzJ");


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
	console.log(req.user);
	var userId = req.query.userid;
	var query = new Parse.Query(Parse.User);
	query.equalTo("objectId", userId);
	query.find({
  		success: function(userObject) {
    		// need verify that the user requesting this page is the correct student for that student profile and is logged in

    		res.render('studentProfile', { user: userObject });
  		},
  		error: function(){
  			res.render('error.html');
  		}
	});
})

/*GET student profile page */
router.get('/sponsorProfile', function(req, res, next) {
	res.render('sponsorProfile.html');
})


module.exports = router;
