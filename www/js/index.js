$(document).ready(function(){

	var session = " ";



	if(!localStorage.getItem('login')){

		window.location.replace("index.html");

	}else{
		session = JSON.parse(localStorage.getItem("login"));
		
	}

	$("#logout_btn").click(function(){

		localStorage.removeItem('login');
		window.location.replace("index.html");

	});


	(function($) {

		$('#header__icon').click(function(e){
			e.preventDefault();
			$('body').toggleClass('with--sidebar');
		});
    
    $('#site-cache').click(function(e){
      $('body').removeClass('with--sidebar');
		});
		

	})(jQuery);

});