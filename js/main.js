

// var weatherResult;
async function getFetch(term="cairo") {

  
    var weatherReq = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=922d8b3605104b1097852751231608&q=${term}&days=3`
    );
    let weatherResult = await weatherReq.json();

    return weatherResult;
    
  

//   displayToday(0);
//   displayTomorrow(1);
//   displayAfterTomorrow(2);
};


function displayToday(data) {
    var TodayDate = new Date(data.forecast.forecastday[0].date);
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
                                <p>${data.location.name}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <h2 class="text-white display-1 fw-bolder">${data.current.temp_c}<sup>o</sup>C</h2>
                                    <img src="${data.current.condition.icon}" alt="wind">
                                </div>
                            </div>
                            <div class="tailOfCard">
                                <p>${data.current.condition.text}</p>
                                <div class="tail d-flex justify-content-between align-items-center">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <img src="./imgs/icon-umberella@2x.png"alt="">
                                        <p>${data.current.cloud}%</p>                             
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <img src="./imgs/icon-wind@2x.png"alt="">
                                        <p>${data.current.wind_kph}km/h</p>                             
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <img src="./imgs/icon-compass@2x.png"alt="">
                                        <p>${data.current.wind_dir}</p>                             
                                    </div>
                                </div>


                            </div>
                        </div>`;
  document.getElementById("firstDay").innerHTML = cartona;
}

function displayTomorrow(data) {
    var TodayDate = new Date(data.forecast.forecastday[1].date);
    var todayDayName = TodayDate.toLocaleDateString("en-US", {weekday: "long"});
  var cartona = "";
  cartona += `<div class="inner">
                        <div class="topOfCard d-flex justify-content-center align-items-center">
                            <p>${todayDayName}</p>
                        </div>
                        <div class="bodyOfCard">
                            <div class="d-flex gap-3 flex-column justify-content-between align-items-center">
                                <img src="${data.forecast.forecastday[1].day.condition.icon}" alt="wind">
                                <h2 class="text-white display-6 fw-medium">${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h2>
                                <p class="minTemp text-white display-6 fw-light">${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</p>
                            </div>
                        </div>
                        <div class="tailOfCard d-flex justify-content-center align-items-center">
                            <p>${data.forecast.forecastday[1].day.condition.text}</p>
                        </div>
                </div>`;

  document.getElementById("SecondDay").innerHTML = cartona;
}
function displayAfterTomorrow(data) {
    var TodayDate = new Date(data.forecast.forecastday[2].date);

    var todayDayName = TodayDate.toLocaleDateString("en-US", {weekday: "long"});

  var cartona = "";
  cartona += `<div class="inner">
                        <div class="topOfCard d-flex justify-content-center align-items-center">
                            <p>${todayDayName}</p>
                        </div>
                        <div class="bodyOfCard">
                            <div class="d-flex gap-3 flex-column justify-content-between align-items-center">
                                <img src="${data.forecast.forecastday[2].day.condition.icon}" alt="wind">
                                <h2 class="text-white display-6 fw-medium">${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h2>
                                <p class="minTemp text-white display-6 fw-light">${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</p>
                            </div>
                        </div>
                        <div class="tailOfCard d-flex justify-content-center align-items-center">
                            <p>${data.forecast.forecastday[2].day.condition.text}</p>
                        </div>
                </div>`;

  document.getElementById("thirdDay").innerHTML = cartona;
}

async function startApp(term){
let allDataRes = await getFetch(term);
console.log(allDataRes);

if (! allDataRes.error) {

displayToday(allDataRes);
displayTomorrow(allDataRes);
displayAfterTomorrow(allDataRes);

}

}
startApp();


var searchButton = document.querySelector(".searchButton");
var searchInput = document.querySelector(".searchInput");

// searchButton.addEventListener("click" , function(){

//     getFetch(searchInput.value);


// } )

searchButton.addEventListener("click", function () {
  startApp(searchInput.value);
});