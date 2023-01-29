const apiKey = "032156b075050ee7d43e1bf4ebcd4df6";

let latitude;
let longitude;
let city = "berlin";
let response;
let queryURL1 = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appID=" + apiKey;



fetch(queryURL1)
.then(response => response.json())
.then(function(response) {
    latitude = response[0].lat;
    longitude = response[0].lon;

    let queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;

    fetch(queryURL2)
    .then(response => response.json())
    .then(function(response) {
        console.log(queryURL2);
        console.log(response);

        let temp = response.list[0].main.temp;
        let celciusTemp = Math.floor(temp - 273.15)

        let wind = response.list[0].wind.speed;

        let humidity = response.list[0].main.humidity;

        document.querySelector("#temp").innerHTML = "Temp: " + celciusTemp + "℃";
        document.querySelector("#wind").innerHTML = "Wind: " + wind + "mph";
        document.querySelector("#humid").innerHTML = "Humidity: " + humidity;

    });


});




//   celciusTemp = Math.floor(temp - 273.15);

