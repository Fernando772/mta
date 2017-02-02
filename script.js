$(document).ready(function(){
    $("#submit").click(function() {
            // console.log("Hi");
            var search= $("#search").val()
            // console.log(search)
            $.getJSON("https://ajar-target.gomix.me/stops", function(response) {
                console.log(response)
                var stopsids = Object.keys(response)
                // console.log(stopsids)
                for(var s= 0;s<stopsids.length;s++ ){
                    // console.log(stopsids[s])
                    var stop = stopsids[s];
                    var stopObject = response[stop];
                    var name = stopObject['stop_name'];
                    $("#gif").append('<li>'+ name + '</li>');
                }
            });
        })
        // $('#search').html()

});
