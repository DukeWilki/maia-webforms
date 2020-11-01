




// API FUNCTION
function sendAPI() {
    // UNIVERSAL API DATA
    const apiUrlToday =
      "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=";
    // const apiUrlUv =
    //   "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/uvi/forecast?";
    // const apiUrlFuture =
    //   "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=";
    const apiKey = "&appid=fd40ccd7b40508e5a2e810c079536a1d";
    const unit = "&units=metric";
    const unitStymbol = "°C";
  
    //  TODAY'S AJAX
    let queryURLToday = apiUrlToday + "Sydney" + unit + apiKey;
  
    $.ajax({
      url: queryURLToday,
      method: "GET",
      
        //404
        error: function (err) {
          console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
          $("#name").text("We can't find that place!");
          $("#date").text("Check the spelling and try again.");
          $("#imageSection").addClass("lost");
      }

    }).then(function (response) {
        console.log(response);
        // Weather conditions for Today
        let tempToday = response.main.temp;
        let humToday = response.main.humidity;
        let descToday = response.weather[0].description;
        let iconToday = response.weather[0].icon;
        let windToday = response.wind.speed;
        let name = response.name;
        let country = response.sys.country;
        let coord = "lat=" + response.coord.lat + "&lon=" + response.coord.lon;

              //   INSERT TODAY'S DATA INTO DOCUMENT
      $("#name").text(name + ", " + country);
      $("#date").text("Local time/date: ");
      $("#date").text(date);
      $("#iconToday").attr(
        "src",
        "https://openweathermap.org/img/wn/" + iconToday + "@2x.png"
      );
      $("#descToday").text("Currently: " + descToday);
      $("#windToday").text("Wind tpeed: " + windToday + "m/s");
      $("#humToday").text("Humidity: " + humToday + "%");
      $("#tempToday").text("Temperature: " + tempToday + unitStymbol);
      $("#uvToday").text("UV index: " + (uvToday + " " + uvRisk));
    });
}
