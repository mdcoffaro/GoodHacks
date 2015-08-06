$(document).ready(function () {
	Parse.initialize("yWusaetgryRjKz5aTG81tzEd4F40e7BSrse5Tpao", "jtBjEknzObCeEh0hYUVmiwTiITQXpKjo4QNigzzJ");

	var currentUser = Parse.User.current();
	var loggedInUser = local_data;

	//check to make sure that the user accessing this profile is the correct logged in user, and not a rando

	console.log(currentUser);

	if(currentUser){
		if(currentUser.attributes.email === loggedInUser[0].email){
			console.log("We good");
			//continue page load
		}else{
			//prevent page load, redirect to home page
			window.location = "http://localhost:3000";
		}
	}else{
		window.location = "http://localhost:3000";
	}	
});