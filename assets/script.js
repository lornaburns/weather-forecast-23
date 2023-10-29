var searchButton = document.getElementById("searchButton");

function getApi(event) {
  event.preventDefault();
  var searchBar = document.getElementById("searchBar");
  var searchedCity = searchBar.value;

  console.log(searchedCity);
  console.log(requestUrl);

  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchedCity +
    "&appid=b293f6a65c95155bc87b6dadbf31946c&units=imperial";
  var forecastUrl =
    "https://api.openweathermap.org/data/2.5/forecast/?q=" +
    searchedCity +
    "&appid=b293f6a65c95155bc87b6dadbf31946c&units=imperial";

  fetch(requestUrl)
    .then(function (response1) {
      return response1.json();
    })
    .then(async function (data1) {
      const response2 = await fetch(forecastUrl);
      const data2 = await response2.json();
      console.log("Data from API 1:", data1);
      console.log("Data from API 2:", data2);

      //HERO element - current data
      var currentCity = document.getElementById("currentCity");
      var currentDate = document.getElementById("currentDate");
      var currentIcon = document.getElementById("currentIcon");
      currentCity.innerHTML = searchedCity;
      currentDate.innerHTML = dayjs().format("MM/D/YYYY");
      iconCode = data1.weather[0].icon;
      iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
      currentIcon.setAttribute("src", iconUrl);
      currentTemp = document.getElementById("currentTemp");
      currentWind = document.getElementById("currentWind");
      currentHumidity = document.getElementById("currentHumidity");
      currentTemp.innerHTML = "Temp: " + data1.main.temp + "&deg;F";
      currentWind.innerHTML = "Wind: " + data1.wind.speed + " MPH";
      currentHumidity.innerHTML =
        "Humidity: " + data1.main.humidity + "&percnt;";

      //forecast - DATES
      var day1Date = document.getElementById("day1Date");
      var day2Date = document.getElementById("day2Date");
      var day3Date = document.getElementById("day3Date");
      var day4Date = document.getElementById("day4Date");
      var day5Date = document.getElementById("day5Date");

      day1Date.innerHTML = dayjs().add(1, "day").format("M/D/YYYY");
      day2Date.innerHTML = dayjs().add(2, "day").format("M/D/YYYY");
      day3Date.innerHTML = dayjs().add(3, "day").format("M/D/YYYY");
      day4Date.innerHTML = dayjs().add(4, "day").format("M/D/YYYY");
      day5Date.innerHTML = dayjs().add(5, "day").format("M/D/YYYY");

      //forecast - ICONS
      iconCode1 = data2.list[4].weather[0].icon;
      iconUrl1 = "http://openweathermap.org/img/w/" + iconCode1 + ".png";
      day1Icon.setAttribute("src", iconUrl1);
      iconCode2 = data2.list[12].weather[0].icon;
      iconUrl2 = "http://openweathermap.org/img/w/" + iconCode2 + ".png";
      day2Icon.setAttribute("src", iconUrl2);
      iconCode3 = data2.list[20].weather[0].icon;
      iconUrl3 = "http://openweathermap.org/img/w/" + iconCode3 + ".png";
      day3Icon.setAttribute("src", iconUrl3);
      iconCode4 = data2.list[28].weather[0].icon;
      iconUrl4 = "http://openweathermap.org/img/w/" + iconCode4 + ".png";
      day4Icon.setAttribute("src", iconUrl4);
      iconCode5 = data2.list[36].weather[0].icon;
      iconUrl5 = "http://openweathermap.org/img/w/" + iconCode5 + ".png";
      day5Icon.setAttribute("src", iconUrl5);

      //forecast - TEMPS
      day1Temp.innerHTML = "Temp: " + data2.list[4].main.temp + "&deg;F";
      day2Temp.innerHTML = "Temp: " + data2.list[12].main.temp + "&deg;F";
      day3Temp.innerHTML = "Temp: " + data2.list[20].main.temp + "&deg;F";
      day4Temp.innerHTML = "Temp: " + data2.list[28].main.temp + "&deg;F";
      day5Temp.innerHTML = "Temp: " + data2.list[36].main.temp + "&deg;F";

      //forecast - WIND
      day1Wind.innerHTML = "Wind: " + data2.list[4].wind.speed + " MPH";
      day2Wind.innerHTML = "Wind: " + data2.list[12].wind.speed + " MPH";
      day3Wind.innerHTML = "Wind: " + data2.list[20].wind.speed + " MPH";
      day4Wind.innerHTML = "Wind: " + data2.list[28].wind.speed + " MPH";
      day5Wind.innerHTML = "Wind: " + data2.list[36].wind.speed + " MPH";

      //forecast - HUMIDITY
      day1Humidity.innerHTML =
        "Humidity: " + data2.list[4].main.humidity + "&percnt;";
      day2Humidity.innerHTML =
        "Humidity: " + data2.list[12].main.humidity + "&percnt;";
      day3Humidity.innerHTML =
        "Humidity: " + data2.list[20].main.humidity + "&percnt;";
      day4Humidity.innerHTML =
        "Humidity: " + data2.list[28].main.humidity + "&percnt;";
      day5Humidity.innerHTML =
        "Humidity: " + data2.list[36].main.humidity + "&percnt;";
    });
}

searchButton.addEventListener("click", getApi);
