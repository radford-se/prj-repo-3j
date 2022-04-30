let measurement = "metric";
let weather = {
  apiKey: "f2c6e85d6afc687fda1421a8b419e1f4",
  fetchWeather: function (lat,lon,measure) {
    fetch(

      "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +
      "&units=" + measure + "&appid=" +
      this.apiKey


    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  fetchCords: function (city,state) {
    fetch(



      "http://api.openweathermap.org/geo/1.0/direct?q=" + city + ",US&limit=11&appid=" + this.apiKey


    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.getCords(data,state));
  },

  getCords: function (data,astate) {
    const { lat } = null;
    const { lon } = null;
    for (var i=0; i < data.length; i++){

      if (data.state == astate) {

        lat = data[i];
        lon = data[i];
        

      }

    }

    this.fetchWeather(lat,lon,measurement);
   
  },
  
  displayWeather: function (data) {
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = document.querySelector(".search-bar").value;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;

    if (measurement == "metric") {
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " m/s";
    }
    else {
      document.querySelector(".temp").innerText = temp + "°F";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " mph";
    }
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchCords(document.querySelector(".search-bar").value, document.querySelector(".state").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector("#imperial").addEventListener("click", function () {
  measurement = measurement.replace("metric", "imperial");
  weather.fetchWeather(document.querySelector(".city").innerText, measurement);
});

document.querySelector("#metric").addEventListener("click", function () {
  measurement = measurement.replace("imperial", "metric");
  weather.fetchWeather(document.querySelector(".city").innerText, measurement);
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("37.1381984","-79.6178087", measurement);