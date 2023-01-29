const apiKey = "032156b075050ee7d43e1bf4ebcd4df6";

let latitude;
let longitude;
let weatherIcon;
let currentDate = new Date().toJSON().slice(0, 10);
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

        if (response.list[0].weather[0].id === 804) {
            weatherIcon = "http://openweathermap.org/img/wn/04n@80x.png";
        };

        let temp = response.list[0].main.temp;
        let celciusTemp = Math.floor(temp - 273.15)

        let wind = response.list[0].wind.speed;

        let humidity = response.list[0].main.humidity;

        document.querySelector("#date").innerHTML = currentDate;
        document.querySelector("#temp").innerHTML = "Temp: " + celciusTemp + "℃";
        document.querySelector("#wind").innerHTML = "Wind: " + wind + "mph";
        document.querySelector("#humid").innerHTML = "Humidity: " + humidity;
        document.querySelector("#card-one-temp").innerHTML = "Temp: " + celciusTemp + "℃";
        document.querySelector("#card-one-wind").innerHTML = "Wind: " + wind + "mph";
        document.querySelector("#card-one-humid").innerHTML = "Humidity: " + humidity;
        document.querySelector(".card-title").innerHTML = currentDate;

    });


});

// let currentDate = new Date().toJSON().slice(0, 10);
// console.log(currentDate);


//   celciusTemp = Math.floor(temp - 273.15);

