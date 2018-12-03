$(document).ready(function () {

    var session = " ";

    if (!localStorage.getItem('login')) {

        window.location.replace("index.html");

    } else {
        session = JSON.parse(localStorage.getItem("login"));
        $("#stdid").val(session[1]);

    }



    $("#logout_btn").click(function () {

        localStorage.removeItem('login');
        window.location.replace("index.html");

    });


    // setup  datetimepicker

    $.datetimepicker.setLocale('en');

    $("#date_s , #date_e").datetimepicker({
        format: 'Y/m/d',
        timepicker: false,
        minDate: 0
    });

    $("#time_s , #time_e").datetimepicker({
        datepicker: false,
        format: 'H:i',
        step: 30
    });


    (function ($) {

        $('#header__icon').click(function (e) {
            e.preventDefault();
            $('body').toggleClass('with--sidebar');
        });

        $('#site-cache').click(function (e) {
            $('body').removeClass('with--sidebar');
        });


    })(jQuery);

    form = $(this).serialize();
    $(this).validate();


    $("#form_input").validate({
        submitHandler: function (form) {

            var ds = $("#date_s").val().split('/');
            var de = $("#date_e").val().split('/');

    
            var date_stat = Date.parse(ds[0]+"-"+ds[1]+"-"+ds[2]);
            var date_end = Date.parse(de[0]+"-"+de[1]+"-"+de[2]);
            var time_start = $("#time_s").val();
            var time_end = $("#time_e").val();

            if(date_stat <= date_end){
                // วันเริ่มต้นน้อยกว่าหรือเท่ากับวันที่คืนห้อง

                if(date_stat == date_end){

                    if(time_start < time_end){

                        $.ajax({
                            type: "POST",
                            url: "https://seniorproject.ict.sci.psu.ac.th/students/ict/std-58/249008/form.php",
                            data: $("#form_input").serialize(),
                            success: function(result) {
                
                                if(result == "1"){
                                    swal('Successfully !',' ','success')
                                    setTimeout(function(){ location.reload();  }, 2000);
                                }
                
                            }
                          });

                    }else{
                       
                        swal('Error!','start time must be less than end time.','error')
                        
                    }
                    

                }else{
                    
                    $.ajax({
                        type: "POST",
                        url: "https://seniorproject.ict.sci.psu.ac.th/students/ict/std-58/249008/form.php",
                        data: $("#form_input").serialize(),
                        success: function(result) {
            
                            if(result == "1"){
                                swal('Successfully !',' ','success')
                                setTimeout(function(){ location.reload();  }, 2000);
                            }
            
                        }
                      });
                }
               
              
            }else{
                //วันเริ่มต้นมากกว่าวันที่คืนห้อง ผิดพลาดด
                swal('Error!','start date must be less than or equal to end date.','error');
                $("#date_s").val("");
            }

            
            /* $.ajax({
                 type: "POST",
                 url: "https://seniorproject.ict.sci.psu.ac.th/students/ict/std-58/249008/form.php",
                 data: $("#form_input").serialize(),
                 success: function(result) {
     
                     if(result == "1"){
                         swal('Successfully !',' ','success')
                         setTimeout(function(){ location.reload();  }, 2000);
                     }else{
                         
                     }
     
     
                 }
               });
 
               */
        }
    });





});