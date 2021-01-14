var nomeCanal = 'backtotriangle';
var upload_id;

$(document).ready(function() {
    $.get("https://www.googleapis.com/youtube/v3/channels", {
        part: 'contentDetails',
        forUsername: nomeCanal,
        key: 'AIzaSyAcPYkguKj7oqrRrADgFl5VU2hDjAe9frA'
    },
        function(data) {
            upload_id = data.items[0].contentDetails.relatedPlaylists.uploads;
            pegarVideos(upload_id);
        }
    )

    function pegarVideos(id){
        $.get("https://www.googleapis.com/youtube/v3/playlistItems", {
            part: 'snippet',
            maxResults: 12,
            playlistId: id,
            key: 'AIzaSyAcPYkguKj7oqrRrADgFl5VU2hDjAe9frA'
    },          
        function(data) {
                var imagem;
                var arquivo;

                $.each(data.items, function(i, item) {
                    imagem = item.snippet.thumbnails.medium.url;
                    titulo = item.snippet.title;
                    arquivo = '<li class="principal"><div class="foto"><img src="' + imagem + '"/><div class="legenda"><h5>' + titulo + '</h5><div/><div/></li>';
                    $('div#janela ul').append(arquivo);
                });
            }
        
        )
        
    }

});