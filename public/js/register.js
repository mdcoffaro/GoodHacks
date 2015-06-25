
$(document).ready(function () {
	$("#register-button").on('click', function() {
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
	// 	return;
	// 	// Submit Function
	// 	var obj = $(".panel-default")[0];
	// 	$(obj).children().each(function() {
	// 		console.log($(this).attr('id'))
	// 		if($(this).attr('id') == "thanks") return;

	// 		$(this).slideUp(150,
	// 			function() {
	// 				$(this).remove()
	// 			});
	// 		});

	// }, function() { // Callback after SlideUp
	// 		$("#thanks").show();
	// 		console.log("A")
	// 	});
	})
})