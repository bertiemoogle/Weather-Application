const apiKey = "032156b075050ee7d43e1bf4ebcd4df6";

let latitude;
let longitude;
let weatherIcon;
let city;
let response;
let search;


let button = document.querySelector("#search-button");

document.querySelector("#search-button").addEventListener("click", function(e) {
    
    e.preventDefault();
    
    search = document.querySelector("#search-input");
    
    city = search.value;

    let queryURL1 = (`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appID=${apiKey}`);

    fetch(queryURL1)
    .then(response => response.json())
    .then(function(response) {
        latitude = response[0].lat;
        longitude = response[0].lon;
        document.querySelector("#city").innerHTML = city;

        let queryURL2 = (`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);

        fetch(queryURL2)
        .then(response => response.json())
        .then(function(response) {
            console.log(queryURL2);
            console.log(response);

            let historyButton = document.createElement("button");
            historyButton.textContent = city;
            document.querySelector("#history").prepend(historyButton);

            
        
            let temp = response.list[0].main.temp;
            let celciusTemp = Math.floor(temp - 273.15)
            let wind = response.list[0].wind.speed;
            let humidity = response.list[0].main.humidity;
            let weatherIcon1 = response.list[0].weather[0].icon;
            
            temp = response.list[8].main.temp;
            let celciusTemp2 = Math.floor(temp - 273.15)
            let wind2 = response.list[8].wind.speed;
            let humidity2 = response.list[8].main.humidity;
            let weatherIcon2 = response.list[8].weather[0].icon;

            temp = response.list[16].main.temp;
            let celciusTemp3 = Math.floor(temp - 273.15)
            let wind3 = response.list[16].wind.speed;
            let humidity3 = response.list[16].main.humidity;
            let weatherIcon3 = response.list[16].weather[0].icon;

            temp = response.list[24].main.temp;
            let celciusTemp4 = Math.floor(temp - 273.15)
            let wind4 = response.list[24].wind.speed;
            let humidity4 = response.list[24].main.humidity;
            let weatherIcon4 = response.list[24].weather[0].icon;

            temp = response.list[32].main.temp;
            let celciusTemp5 = Math.floor(temp - 273.15)
            let wind5 = response.list[32].wind.speed;
            let humidity5 = response.list[32].main.humidity;
            let weatherIcon5 = response.list[32].weather[0].icon;

            historyButton = {
                city : city,
                temperature : temp,
                windspeed : wind,
                humidity : humidity
                }
              
              window.localStorage.setItem("historyButton", JSON.stringify(historyButton));

            let weatherImg = document.createElement("img");
            weatherImg.src = (`https://openweathermap.org/img/wn/${weatherIcon1}@2x.png`);
            document.querySelector("#conditions").innerHTML = "";
            document.querySelector("#conditions").appendChild(weatherImg);

            document.querySelector("#date").innerHTML = response.list[0].dt_txt.slice(0, 10);
            document.querySelector("#temp").innerHTML = "Temp: " + celciusTemp + "℃";
            document.querySelector("#wind").innerHTML = "Wind: " + wind + "mph";
            document.querySelector("#humid").innerHTML = "Humidity: " + humidity;
            

            document.querySelector("#card-one-temp").innerHTML = "Temp: " + celciusTemp + "℃";
            document.querySelector("#card-one-wind").innerHTML = "Wind: " + wind + "mph";
            document.querySelector("#card-one-humid").innerHTML = "Humidity: " + humidity;
            document.querySelector(".card-one-title").innerHTML = response.list[0].dt_txt.slice(0, 10);
            weatherImg.src = (`https://openweathermap.org/img/wn/${weatherIcon1}@2x.png`);
            document.querySelector("#conditions2").innerHTML = "";
            document.querySelector("#conditions2").appendChild(weatherImg);
            

            document.querySelector("#card-two-temp").innerHTML = "Temp: " + celciusTemp2 + "℃";
            document.querySelector("#card-two-wind").innerHTML = "Wind: " + wind2 + "mph";
            document.querySelector("#card-two-humid").innerHTML = "Humidity: " + humidity2;
            document.querySelector(".card-two-title").innerHTML = response.list[8].dt_txt.slice(0, 10);
            weatherImg = document.createElement("img");
            weatherImg.src = (`https://openweathermap.org/img/wn/${weatherIcon2}@2x.png`);
            document.querySelector("#conditions3").innerHTML = "";
            document.querySelector("#conditions3").appendChild(weatherImg);

            document.querySelector("#card-three-temp").innerHTML = "Temp: " + celciusTemp3 + "℃";
            document.querySelector("#card-three-wind").innerHTML = "Wind: " + wind3 + "mph";
            document.querySelector("#card-three-humid").innerHTML = "Humidity: " + humidity3;
            document.querySelector(".card-three-title").innerHTML = response.list[16].dt_txt.slice(0, 10);
            weatherImg = document.createElement("img");
            weatherImg.src = (`https://openweathermap.org/img/wn/${weatherIcon3}@2x.png`);
            document.querySelector("#conditions4").innerHTML = "";
            document.querySelector("#conditions4").appendChild(weatherImg);

            document.querySelector("#card-four-temp").innerHTML = "Temp: " + celciusTemp4 + "℃";
            document.querySelector("#card-four-wind").innerHTML = "Wind: " + wind4 + "mph";
            document.querySelector("#card-four-humid").innerHTML = "Humidity: " + humidity4;
            document.querySelector(".card-four-title").innerHTML = response.list[24].dt_txt.slice(0, 10);
            weatherImg = document.createElement("img");
            weatherImg.src = (`https://openweathermap.org/img/wn/${weatherIcon4}@2x.png`);
            document.querySelector("#conditions5").innerHTML = "";
            document.querySelector("#conditions5").appendChild(weatherImg);

            document.querySelector("#card-five-temp").innerHTML = "Temp: " + celciusTemp5 + "℃";
            document.querySelector("#card-five-wind").innerHTML = "Wind: " + wind5 + "mph";
            document.querySelector("#card-five-humid").innerHTML = "Humidity: " + humidity5;
            document.querySelector(".card-five-title").innerHTML = response.list[32].dt_txt.slice(0, 10);
            weatherImg = document.createElement("img");
            weatherImg.src = (`https://openweathermap.org/img/wn/${weatherIcon5}@2x.png`);
            document.querySelector("#conditions6").innerHTML = "";
            document.querySelector("#conditions6").appendChild(weatherImg);



        });
    });


});
