$.depositForm = function () {

    var name = $("#insc_name").val().trim();
    var phone = $("#insc_phone").val().trim();
    var email = $("#insc_email").val().trim();
    var amount = $("#insc_amount").val().trim();

    var valid = 1;
    
    if(name.length==0){
        valid = 0;
        $('#insc_name').css("border-color", "red");
    } else{
        valid = 1;
        $('#insc_name').css("border-color", "#a6a6a6");
    }

    if(phone.length==0){
        valid = 0;
        $('#insc_phone').css("border-color", "red");
    } else{
        valid = 1;
        $('#insc_phone').css("border-color", "#a6a6a6");
    }

    if(!$.validarCorreo(email)){
        valid = 0;
        $('#insc_email').css("border-color", "red");
    } else{
        valid = 1;
        $('#insc_email').css("border-color", "#a6a6a6");
    }

    if(amount.length==0){
        valid = 0;
        $('#insc_amount').css("border-color", "red");
    } else{
        valid = 1;
        $('#insc_amount').css("border-color", "#a6a6a6");
    }

    if(valid == 1) {

        $.inscriptionForm = {
            Nombre: name,
            Telefono: phone,
            Correo: email,
            Mensaje: amount
        };
        
        swal({
            title: '<br /><div class="sk-spinner sk-spinner-cube-grid"><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div></div>',
            text: "Enviando información...",
            allowEscapeKey: false,
            showConfirmButton: false
        })

        ServiceHandler.SendMail($.inscriptionForm,function(response){
            ServiceHandler.SendMailInscription($.inscriptionForm.Correo,function(response){
                swal({
                    title: '¡Muchas gracias!',
                    text: 'Sigue las instrucciones que llegarán a tu correo para finalizar la inscripción..',
                    timer: 9000
                }).then(
                    function () {
                        window.location.href = "cursos.html";
                    }, function (dismiss) {
                        window.location.href = "cursos.html";
                    }
                );
            });
        });

                    
    } else {
        swal("Datos incorrectos", "Por favor revisa la información", "warning");
    }

}


$('#insc_email').keyup(function(){
    if(!$.validarCorreo($("#insc_email")[0].value)){
        valid = 0;
        $('#insc_email').css("border-color", "red");
    } else{
        valid = 1;
        $('#insc_email').css("border-color", "#a6a6a6");
    }
});

$.validarCorreo = function (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}