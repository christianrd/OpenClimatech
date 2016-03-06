/* Add your custom JavaScript code */

//$(document).ready(fucntion(){

    $("#error1").fadeOut('fast');
    $("#success1").fadeOut('fast');
    $("#error2").fadeOut('fast');
    $("#success2").fadeOut('fast');
    $("#error3").fadeOut('fast');
    $("#success3").fadeOut('fast');

    $("#verificar1").click(function(){
        var respuesta1 = $('input:radio[name=resp1]:checked').val();
        // alert(respuesta1);
        if(respuesta1 == "B"){
            $("#answer1").fadeOut('fast');
            $("#success1").fadeIn('slow');
        }else if(respuesta1 == "A"){
            $("#answer1").fadeOut('fast');
            $("#error1").fadeIn('slow');
        }else{
            alert('Por favor seleccione una respuesta.');
        }
    });

    $("#verificar2").click(function(){
        var respuesta2 = $('input:radio[name=resp2]:checked').val();
        // alert(respuesta2);
        if(respuesta2 == "C"){
            $("#answer").fadeOut('fast');
            $("#success2").fadeIn('slow');
        }else if(respuesta2 == "A"){
            $("#answer2").fadeOut('fast');
            $("#error2").fadeIn('slow');
        }else if(respuesta2 == "B"){
            $("#answer2").fadeOut('fast');
            $("#error2").fadeIn('slow');
        }else if(respuesta2 == "D"){
            $("#answer2").fadeOut('fast');
            $("#error2").fadeIn('slow');
        }else{
            alert('Por favor selecciones una respuesta.');
        }
    });

    $("#verificar3").click(function(){
        var respuesta = $('input:radio[name=boolean]:checked').val();
        if(respuesta == "Si"){
            $("#answer3").fadeOut('fast');
            $("#success3").fadeIn('slow');
        }else if(respuesta == 'No'){
            $("#answer3").fadeOut('fast');
            $("#error3").fadeIn('slow');
        }else{
            alert('Por favor selecciones una respuesta.');
        }
    });

//});
