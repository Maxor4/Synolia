$(document).ready(function() {
    $('#dtAlbum').DataTable({
        "language": {
            "decimal": ".",
            "thousands": " "
        },
        "columnDefs": [
            { "type": "currency", "targets": 4 }
        ]
    } );
    $('#dtArtiste').DataTable();
} );

function switchTable(){
    $('#artiste').toggle();
    $('#album').toggle();
    $('#boutonSwitch').text($('#artiste').visible ? "Liste albums" : "Liste Artistes");
}

function affichageDetails(id_album) {
    $('#ongletAlbum'+id_album).toggle();
}

function envoieAjax(param, fonctionFail) {
    //Fonction que l'on doit exécuter comme un callback
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