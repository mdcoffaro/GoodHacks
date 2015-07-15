
$(document).ready(function () {
	
	Parse.initialize("yWusaetgryRjKz5aTG81tzEd4F40e7BSrse5Tpao", "jtBjEknzObCeEh0hYUVmiwTiITQXpKjo4QNigzzJ");
	$("#login-submit").on('click', loginUser());
})

function loginUser(){

	var username = $("#login-email").prop('value');
	var password = $("#login-password").prop('value');

	Parse.User.logIn(username, password, {
		success: function(username){
			//login successful!
			console.log("WE MADE IT YO");

			//display their profile page
		},
		error: function(username, error){
			//login failed
		}
	});
}