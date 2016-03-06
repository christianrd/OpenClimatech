/* Add your custom JavaScript code */

//$(document).ready(fucntion(){

    $("#error1").fadeOut('fast');
    $("#success1").fadeOut('fast');
    $("#error2").fadeOut('fast');
    $("#success2").fadeOut('fast');

    $("#verificar1").click(function(){
        var respuesta1 = $('input:radio[name=resp1]:checked').val();
        alert(respuesta1);
        if(respuesta1 == "B"){
            $("#answer1").fadeOut('fast');
            $("#succes1").fadeIn('slow');
        }else{
            $("#answer1").fadeOut('fast');
            $("#error1").fadeIn('slow');

        }
    });

    $("#verificar2").click(function(){
        var respuesta2 = $('input:radio[name=resp2]:checked').val();
        if(respuesta2 == "C"){
            $("#answer2").fadeOut('fast');
            $("#succes2").fadeIn('slow');
        }else{
            $("#answer2").fadeOut('fast');
            $("#error2").fadeIn('slow');
        }
    });

    $("#verificar3").click(function(){
        var respuesta = $('input:radio[name=boolean]:checked').val();
        if(respuesta == "Si"){

        }else{

        }
    });

//});
