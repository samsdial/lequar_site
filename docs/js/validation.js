//data
//name
//country
//city
//email
//message
$(document).ready(function($){
    $('#submit').click(function(){
        var name = $("#name").val();
        var country = $("#country").val();
        var city = $("#city").val();
        var email = $("#email").val();
        var validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        var message = $("#message").val();
        if(name == "" || country == "" || city == "" || email == "" || message == "") {
        if(name == ""){
            $(".name").addClass("error");
            $("#name").focus();
            return false;
        }else {
            $(".name").removeClass("error");
        }
        if(country == "") {
            $(".country").addClass("error");
            $("#country").focus();
            return false;
        }else{
            $(".country").removeClass("error");
        }
        if(city == "") {
            $(".city").addClass("error");
            $("#city").focus();
            return false;
        }else {
            $(".city").removeClass("error");
        }
        if(email == "" || !validacion_email.test(email)) {
            $(".email").addClass("error");
            $("#email").focus();
            return false;
        }else{
            $(".email").removeClass("error");
        }
        if(message == "") {
            $(".message").addClass("error");
            $("#message").focus();
            return false;
            }else{
            $(".message").removeClass("error");
            }
        }else{
            $(".message").removeClass("error");
            var datos = '&name=' + name +
            '&country=' + country +
            '&city=' + city +
            '&email=' + email +
            '&message=' + message;
            $.ajax({
                method:"Post",
                url:"register.php",
                dataType:"json",
                data:datos,
            }).done(function( msg ){
                if(msg.success){
                    $('.alerta p').fadeIn("slow");//
                    $('.alerta p').html('Gracias por contactarnos *');
                    $('#name').val("");
                    $('#country').val("");
                    $('#city').val("");
                    $('#email').val("");
                    $('#message').val("");
                }else{
                    $('.alerta p').fadeIn("slow");
                    $('.alerta p').html('Error, intente por favor más tarde');

                };
            });
            return false;
        }
    });
});
