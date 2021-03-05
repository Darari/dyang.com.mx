$(document).ready(function() {
	AOS.init();
    
    $("#newsletter").click(function () {

        var name = $("#Nombre").val();
        var email = $("#Correo").val();
        var msg_subject = $("#Mensaje").val();
        var valid = 1;
        
        if(name.length==0){
            $('#nameError').show();
            valid = 0;
        } else{
            $('#nameError').hide();
        }
        if(email.length==0){
            $('#emailError').show();
            valid = 0;
        } else{
            $('#emailError').hide();
        }
        if(msg_subject.length == 0){
            $('#searchingError').show();
            valid = 0;
        } else{
            $('#searchingError').hide();
        }

        if(valid == 1) {

            $.contactForm = {
                Nombre: name,
                Correo: email,
                Mensaje: msg_subject
            };
            
            swal({
                title: '<br /><div class="sk-spinner sk-spinner-chasing-dots"> <div class="sk-dot1"></div><div class="sk-dot2"></div></div><br />',
                text: "Enviando información...",
                allowEscapeKey: false,
                showConfirmButton: false
            })
            /*  */
            ServiceHandler.SendMail($.contactForm,function(response){
                swal({
                    title: '¡Muchas gracias!',
                    text: 'En breve analizaremos tu información y te contactaremos..',
                    timer: 9000
                }).then(
                    function () {
                        window.location.href = "https://www.dyang.com.mx/";
                    }, function (dismiss) {
                        window.location.href = "https://www.dyang.com.mx/";
                    }
                );
            });
        } else {
            swal("Oops!","Revisa que los campos estén correctamente llenados","warning");
        }
    });

});