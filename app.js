const apikey="3b7f904f073d5239861004f8eece6f4f";
const form=document.querySelector("form");

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    const cityName=document.getElementById('city-name').value;
    getWeatherData(cityName);
})

async function getWeatherData(cityName){
let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apikey}`;
const response=await fetch(url);
const data=await response.json();
showWeatherInfo(data);
 
}
function showWeatherInfo(data){
  console.log(data)
  let imgIcon="http://api.openweathermap.org/img/w/"+data.weather[0].icon+".png";
  const weatherInfo=document.getElementById('weather-info');
  weatherInfo.innerHTML=`
  <h2>CountryCode:${data.sys.country}</h2>
  <h3>CityName:${data.name}</h3>
  <p>Temperature:${data.main.temp}F ${Math.round(data.main.temp-273.15)}C</p>
  <p>Humidity:${data.main.humidity}%</p>
  <p>Pressure:${data.main.pressure}hPa</p>
  <p>Weather:${data.weather[0].description}<img src=${imgIcon} height=25 width=50></p>
  <p>Wind Speed:${data.wind.speed}m/s</p>
  `;
}


