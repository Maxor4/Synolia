$(document).ready(function() {
    $('#dtContacts').DataTable({
        "language": {
            "decimal": ".",
            "thousands": " "
        },
        "columnDefs": [
            { "type": "currency", "targets": 4 }
        ]
    } );
    $('#dtTask').DataTable();
});

function callAjax(){
    envoieAjax({
        url: "https://sg-cmdpractice.demo.sugarcrm.eu/rest/v11_5/oauth2/token",
        headers: {
            //'api-key': apiKey,
            //"x-csrf-token": apiToken,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : 'https://sg-cmdpractice.demo.sugarcrm.eu'
        },
        data:{
            grant_type:"password",
            client_id:"sugar",
            client_secret:"",
            username:"will",
            password:"MazY7eC6z$W!eC8W",
            platform:"base"
        },
        success: function (data) {
            console.log(data)
        }
    });
}

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else {
        xhr = null;
    }
    return xhr;
}

function corsRequest() {
    var url = "https://sg-cmdpractice.demo.sugarcrm.eu/rest/v11_5/oauth2/token";

    var xhr = createCORSRequest('POST', url);
    if (!xhr) {
        console.log('CORS not supported');
        return;
    }

    xhr.onload = function() {
        console.log('Response from CORS request to ' + url);
    };

    xhr.onerror = function() {
        console.log('Whoops, there was an error making the request.');
    };

    xhr.send();
}

function envoieAjax(param, fonctionFail) {
    var fonctionSuccess = param.success,
        defaut =    {
            dataType: 'json',
            type: 'POST'
        };
    param = $.extend(defaut, param);
    param['error'] = function(xhr, ajaxOptions, thrownError) {
        if(typeof(xhr.status) !== 'undefined') {
            switch (xhr.status) {
                case 500:
                    alert("Une erreur est survenue lors de l'exécution de votre requête");
                    break;
                default:
                    console.log(xhr.status);
                    console.log(xhr.responseText);
                    console.log(thrownError);
            }
        }
    };
    //On redéfinit success en mettant le if général
    param['success'] = function(data) {
        //console.log(data);
        // Si tout est OK
        if(data.status === 1) {
            fonctionSuccess(data);
        }
        // Si la session est terminée
        else if(data.status === -1) {
            // affiche le message de fin de session et redirige sur l'auth après 1sec.
            alert(data.message);
        }
        // Si la requete s'est mal passée
        else {
            if(typeof(fonctionFail) === 'function') {
                fonctionFail(data);
            }
            else {
                alert(data.message);
            }
        }
    };

    $.ajax(param);
}