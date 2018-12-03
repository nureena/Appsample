$(document).ready(function() {


    if(localStorage.getItem('login')){

        window.location.replace("home.html");

    }
			
	$("#btnSubmit").click(function() {
		
        $.ajax({
            type: "POST",
            url: "https://seniorproject.ict.sci.psu.ac.th/students/ict/std-58/249008/login.php",
            data: $("#login_form").serialize(),
            success: function(result) {

                var result = eval(result);

                if(result[0] == "1"){
                    /// login สำเร็จ
                    localStorage.setItem('login', JSON.stringify(result));
                    window.location.replace("home.html");
                    //alert(result);
                }else{
                    /// login ไม่สำเร็จ 
                    $(".login-fail").removeClass("d-none");
                }

                
            }
          });

	});
	
});