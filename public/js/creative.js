/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(document).ready(function() {

    $(":submit").on('click', submitForm);
});

function submitForm(){
    var values = $('form').serializeArray();

    var firstname = values[0].value;
    var lastname = values[1].value;
    var email = values[2].value;
    var passwordHash = values[3].value;
    var confirmPasswordHash = values[4].value;
    var school = values[5].value;
    var how = values[6].value;
    var why = values[7].value;

    
    var student = {
        'firstname' : firstname,
        'lastname' : lastname,
        'email' : email,
        'passwordhash' : passwordHash,
        'passwordhashverify' : confirmPasswordHash,
        'schoolorg' : school,
        'how' : how,
        'why' : why
    }

    //TODO form validation and security
    if(passwordhash != passwordhashverify){
        //say they dont match
    }



}


(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1:not(#titletext,#subtitletext)").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict



