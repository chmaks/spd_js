

$(function() {
	var $form = $(".cForm_js"),
		$input = $form.find('input');
		
		
	var $nameField = $form.find('[name="name"]'),
		$emailField = $form.find('[name="email"]'),
		$phoneField = $form.find('[name="phone"]'),
		$passField = $form.find('[name="password"]'),
		$zipField = $form.find('[name="zip"]');
		
	var validateFields = function() {
		var isValid = false;
		validateEmail();
		validateName();
		validatePassword();
		validatePhone();
		validateZip();
	};

	var validateEmail = function(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	};

	var validatePassword = function() {
		var isValid = true;
	};

	var validateName = function() {
		var isValid = true;
	};

	var validatePhone = function() {
		var isValid = true;
	};

	var validateZip = function() {
		var isValid = true;
	};

	var submitForm = function() {

	}
	
	$(".cSubmit_js").on("click", function(e){
		e.preventDefault();
		
		$.each( $input, function(data) {
			var self = $(this);
				value = self.val();
			$.trim(self.val()) ? validateFields(value) : self.closest('.cInputWrap_js').find(".c-error").html("please fill in the field");
		});
	});
	
	$input.on("focus", function(){
		$(this).closest('.cInputWrap_js').find(".c-error").html("");
	})
});

