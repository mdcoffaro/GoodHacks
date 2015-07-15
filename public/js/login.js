
$(document).ready(function () {
	
	Parse.initialize("yWusaetgryRjKz5aTG81tzEd4F40e7BSrse5Tpao", "jtBjEknzObCeEh0hYUVmiwTiITQXpKjo4QNigzzJ");
	$("#login-submit").click(loginUser);
})

function loginUser(e) {
	var username = $("#login-email").prop('value');
	var password = $("#login-password").prop('value');

	Parse.User.logIn(username, password, {
		success: function(username){
			//login successful, clear form, take user to their profile page
			console.log("Login successful");

			//clear form
			$("#login-email").val("");
			$("#login-password").val("");


			//display their profile page (need to figure out routes)
			window.location =  "http://google.com/";
		},
		error: function(username, error){
			//login failed, display error message
			alertUser("Invalid email/password, please try again.")
		}
	});

	return false;
}


function alertUser(msg) {
	$(".error").html(msg);
	$(".error").slideDown(250, function() {
		setTimeout(function() {
			$(".error").slideUp(250);
		}, 6000)
	});
}