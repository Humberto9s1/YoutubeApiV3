$(document).ready(function() {
    $.get("https://www.googleapis.com/youtube/v3/videos", {
            part: 'statistics',
            id: 'AK5RptOd3k4',
            key: 'AIzaSyAcPYkguKj7oqrRrADgFl5VU2hDjAe9frA'},
            function(data) {
                console.log(data);
            }
    )
});