let weather = {
  apikey: "1e255b6266f7914916f368d5074676a3",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "w in" + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "C";
    document.querySelector(".humidity").innerText = "Humidity" + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed" + speed + "km/h";
    document.querySelector(".weather").classList.remove('loading')
  },
  search: function () {
    this.fetchWeather(document.querySelector(".searchBar").value);
  },
};






document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".searchBar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

  weather.fetchWeather('Denver');
