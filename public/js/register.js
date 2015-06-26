
$(document).ready(function () {
	$("#register-button").on('click', function() {
		if(!verifyName($("#first_name").prop('value'), $("#last_name").prop('value'))) return;
		if(!verifyEmail($("#email").prop('value'))) return;
		if(!verifyPassword($("#password").prop('value'), $("#password_confirmation").prop('value'))) return;

		// Check forms
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

function verifyName(firstname, lastname) {
	var re = /[A-Za-z\'\ ]/i;

	if(re.test(firstname) && re.test(lastname)) return true;
	else {
		alertUser("first name and last name failed")
		return false;
	}
}

function verifyEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(re.test(email)) return true;
    else {
    	alertUser("email failed");
    	return false;
    }
}

function verifyPassword(password, confirm) {
	if(password != confirm) {
		alertUser("passwords must be the same")
		return false;
	}
	if(password.length <= 6) {
		alertUser("password must be 7 characters or longer")
		return false;
	}
	return true;
}

function alertUser(msg) {
	$(".panel").addClass("shake shake-little")
	setTimeout(function() {
		$(".panel").removeClass("shake shake-little")
	}, 250);
}