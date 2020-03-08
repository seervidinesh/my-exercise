$(document).ready(function() {
    var array = [];
    $.ajax({
        url: "https://raw.githubusercontent.com/attainu/attainu-eagle/master/coding-challenges/week-4/day-4/cities.json",
        type: "GET",
        datatype: "json",
        success: function(data) {
            var obj = JSON.parse(data);
            var index = obj.length;
            $("#sample").html(data.state);
            console.log(data);
        }
    });
    var search;
    $('#search').on('click', function() {
        var search1 = document.querySelector('#input');
        search = search1.value;
        for (var i = 0; i < array.length; i++) {
            if (array[i].name.charAt(0).toLowerCase() == search) {
                var out = `<li class="list-group-item"> ${array[i].name}</li>`
            }
        }
        $('#result').append(out);
    });
});