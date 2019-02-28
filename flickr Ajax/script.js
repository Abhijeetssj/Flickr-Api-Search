function search() {
    var q = document.getElementById("item").value;
    var imgId;
    var imgUrl ;
    var result = $("#results");
    $.ajax({
        url: "https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search" +
        "&api_key=2fd41b49fedfd589dc265350521ab539&nojsoncallback=1&tags=" + q + "&extras=url_o",
        type: "get",
        success: function (res) {
                $(".card").remove();
            for (var i = 0; i < res.photos.photo.length; i++) {
                imgId = res.photos.photo[i].id;
                imgUrl = res.photos.photo[i].url_o;
                //getImage(imgId);
                result.append("<div id='" + imgId + "' class=\"card\" style=\"width:300px ; height: ;\">\n" +
                    "          <img class=\"card-img-top\" src=\" " + imgUrl + "  \" alt=\"\">\n" +
                    "          <button class=\"btn rem btn-dark rounded-0\">\ remove " +
                    "          </button>\n" +
                    "        </div>");

                $(".rem").click( function () {
                    $(this).parent().remove();
                });

            }

        }
    });
}

$( "#item" ).keypress(function(e) {
    if(e.keyCode === 13){        search();
    }else{
        return
    }
});

$(document).ready(function () {
    $("#searchBtn").click(function (e) {
        search();
    });
});

