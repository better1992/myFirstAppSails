$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

		$('.form-signin').validate({
	    rules: {
	      name: {
	        required: true
	      },
	      email: {
	        required: true,
	        email: true
	      },
	      encryptedPassword: {
	      	minlength: 6,
	        required: true
	      },
	      confirmPassword: {
	      	minlength: 6,
	      	equalTo: "#encryptedPassword"
	      }
	    },
			success: function(element) {
				element
				.text('OK!').addClass('valid')
			}
	  });

});

