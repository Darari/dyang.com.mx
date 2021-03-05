var ServiceHandler = {};

(function($)
{

    var send_mail = function(dta, callback_success){

        var _url = 'https://bitnovasoft.azurewebsites.net/maades/notifications/send_mail_5dmx/';
        //var _url = 'http://localhost:59911/maades/notifications/send_mail_5dmx/';

        $.ajax({
            type: 'POST',
            url: _url,
            data: dta,
            crossDomain: true,
            headers: {
                //'Content-Type': "application/json"
                //,'Access-Control-Allow-Origin':"*"
            },
            jsonp: "callback",
            success: callback_success,
            error: function(response) {
                console.log("error: ", response);
            }
        });
    };

	ServiceHandler ={
        SendMail:send_mail
	};

})(jQuery);