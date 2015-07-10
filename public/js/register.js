
$(document).ready(function () {

	Parse.initialize("yWusaetgryRjKz5aTG81tzEd4F40e7BSrse5Tpao", "jtBjEknzObCeEh0hYUVmiwTiITQXpKjo4QNigzzJ");

	$("#register-button").on('click', function() {
		if(!verifyName($("#first_name").prop('value'), $("#last_name").prop('value'))) return;
		if(!verifyEmail($("#email").prop('value'))) return;
		if(!verifyPassword($("#password").prop('value'), $("#password_confirmation").prop('value'))) return;

		// Check forms
		//insets data into db
		var user = new Parse.User();
		user.set("username", $("#first_name").prop('value')+$("#last_name").prop('value'));
		user.set("firstName", $("#first_name").prop('value'));
		user.set("lastName", $("#last_name").prop('value'));
		user.set("email", $("#email").prop('value'));
		user.set("password", $("#password").prop('value'));
		user.set("school", $("#institution").prop('value'));
		user.set("linkedin", $("#linkedin").prop('value'));
		user.set("github", $("#github").prop('value'));

		user.signUp(null, {
			success: function(user){
				console.log("student added successfully");
			},
			error: function(user, error){
				alert("Error: " + error.code + " " + error.message);
			}
		});

		$(".panel-body").slideUp(150, function() {
			$(".panel-heading").slideUp(150, function() {
				setTimeout(function() {
					$("#thanks").slideDown(250);
					$(".panel-heading, panel-body").remove();
					setTimeout(function() {
						window.location="/";
					}, 3500)
				}, 350)

			})
		})
	})
})

$(function() {
    $( document ).tooltip();
});

function verifyName(firstname, lastname) {
	var re = /[A-Za-z\'\ ]/i;

	if(re.test(firstname) && re.test(lastname)) return true;
	else {
		alertUser("First and Last names have to be alphabetical characters.")
		return false;
	}
}

function verifyEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(re.test(email)) return true;
    else {
    	alertUser("Not a valid email.");
    	return false;
    }
}

function verifyPassword(password, confirm) {
	if(password != confirm) {
		alertUser("Passwords have to be at least 7 characters and match")
		return false;
	}
	if(password.length <= 6) {
		alertUser("password must be 7 characters or longer")
		return false;
	}
	return true;
}

function alertUser(msg) {
	$(".error").html(msg);
	$(".error").slideDown(250, function() {
		setTimeout(function() {
			$(".error").slideUp(250);
		}, 6000)
	});
	// $(".panel").addClass("shake shake-little")
	// setTimeout(function() {
	// 	$(".panel").removeClass("shake shake-little")
	// }, 250);
}