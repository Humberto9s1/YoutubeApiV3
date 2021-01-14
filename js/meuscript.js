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
            maxResults: 10,
            playlistId: id,
            key: 'AIzaSyAcPYkguKj7oqrRrADgFl5VU2hDjAe9frA'
    },          
        function(data) {
            console.log(data);
            }
        
        )
        
    }

});