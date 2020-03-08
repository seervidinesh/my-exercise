$('#cityName').keyup(function() {
    var inputString = this.value.toLowerCase()
    if (inputString.length < 3) return;
    console.log(inputString)
    $.ajax({
        url: "/iatacodes",
        type: "GET",
        dataType: "json",
        success: (data) => {
            var index = -1;
            var outputArray = [];
            for (let i = 0; i < data.length; i++) {
                function myFunction() {
                    var str = data[i].city_name.toLowerCase()
                    var n = str.includes(inputString);
                    if (n) {
                        return console.log(data[i].city_name, data[i].IATA_code)
                    }
                }
                myFunction()
            }
        }
    })
});