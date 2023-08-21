

var weatherResult;
async function getFetch(term) {
  var weatherReq = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=922d8b3605104b1097852751231608&q=${term}&days=3`
  );
  weatherResult = await weatherReq.json();


  displayToday();
  displayTomorrow();
  displayAfterTomorrow();
};
getFetch();

function displayToday() {
    var TodayDate = new Date(weatherResult.forecast.forecastday[0].date);
    var todayDayOfMonth = TodayDate.getDate();
    var todayDayName = TodayDate.toLocaleDateString("en-US", {weekday: "long"});
    var todayMonthName = TodayDate.toLocaleDateString("en-US", {month: "long"});
  var cartona = "";
  cartona += `<div class="inner">
                            <div class="topOfCard d-flex justify-content-between align-items-center">
                                <p>${todayDayName}</p>
                                <p>${todayDayOfMonth}${todayMonthName}</p>
                            </div>
                            <div class="bodyOfCard">
                                <p>${weatherResult.location.name}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <h2 class="text-white display-1 fw-bolder">${weatherResult.current.temp_c}<sup>o</sup>C</h2>
                                    <img src="${weatherResult.current.condition.icon}" alt="wind">
                                </div>
                            </div>
                            <div class="tailOfCard">
                                <p>${weatherResult.current.condition.text}</p>
                                <div class="tail d-flex justify-content-between align-items-center">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <img src="./imgs/icon-umberella@2x.png"alt="">
                                        <p>${weatherResult.current.cloud}%</p>                             
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <img src="./imgs/icon-wind@2x.png"alt="">
                                        <p>${weatherResult.current.wind_kph}km/h</p>                             
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <img src="./imgs/icon-compass@2x.png"alt="">
                                        <p>${weatherResult.current.wind_dir}</p>                             
                                    </div>
                                </div>


                            </div>
                        </div>`;
  document.getElementById("firstDay").innerHTML = cartona;
}

function displayTomorrow() {
    var TodayDate = new Date(weatherResult.forecast.forecastday[1].date);
    var todayDayName = TodayDate.toLocaleDateString("en-US", {weekday: "long"});
  var cartona = "";
  cartona += `<div class="inner">
                        <div class="topOfCard d-flex justify-content-center align-items-center">
                            <p>${todayDayName}</p>
                        </div>
                        <div class="bodyOfCard">
                            <div class="d-flex gap-3 flex-column justify-content-between align-items-center">
                                <img src="${weatherResult.forecast.forecastday[1].day.condition.icon}" alt="wind">
                                <h2 class="text-white display-6 fw-medium">${weatherResult.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h2>
                                <p class="minTemp text-white display-6 fw-light">${weatherResult.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</p>
                            </div>
                        </div>
                        <div class="tailOfCard d-flex justify-content-center align-items-center">
                            <p>${weatherResult.forecast.forecastday[1].day.condition.text}</p>
                        </div>
                </div>`;

  document.getElementById("SecondDay").innerHTML = cartona;
}
function displayAfterTomorrow() {
    var TodayDate = new Date(weatherResult.forecast.forecastday[2].date);

    var todayDayName = TodayDate.toLocaleDateString("en-US", {weekday: "long"});

  var cartona = "";
  cartona += `<div class="inner">
                        <div class="topOfCard d-flex justify-content-center align-items-center">
                            <p>${todayDayName}</p>
                        </div>
                        <div class="bodyOfCard">
                            <div class="d-flex gap-3 flex-column justify-content-between align-items-center">
                                <img src="${weatherResult.forecast.forecastday[2].day.condition.icon}" alt="wind">
                                <h2 class="text-white display-6 fw-medium">${weatherResult.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h2>
                                <p class="minTemp text-white display-6 fw-light">${weatherResult.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</p>
                            </div>
                        </div>
                        <div class="tailOfCard d-flex justify-content-center align-items-center">
                            <p>${weatherResult.forecast.forecastday[2].day.condition.text}</p>
                        </div>
                </div>`;

  document.getElementById("thirdDay").innerHTML = cartona;
}





var searchButton = document.querySelector(".searchButton");
var searchInput = document.querySelector(".searchInput");

searchButton.addEventListener("click" , function(){

    getFetch(searchInput.value);


} )

// searchInput.addEventListener("keyup", function () {
//   getFetch(searchInput.value);
// });