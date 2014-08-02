$(function(){
	$('#login, #login-mini').on('click', function(e){
		$('#frm-create-acc').slideUp();
		$('#frm-login').slideToggle();

		var target = $(this.hash);
		if (target.length == 0) target = $('html');
		$('html, body').animate({ scrollTop: target.offset().top }, 500);

		e.preventDefault();
	});

	$('#create-acc, #create-acc-mini').on('click', function(e){
		$('#frm-login').slideUp();
		$('#frm-create-acc').slideToggle();

		var target = $(this.hash);
		if (target.length == 0) target = $('html');
		$('html, body').animate({ scrollTop: target.offset().top }, 500);

		e.preventDefault();
	});
});