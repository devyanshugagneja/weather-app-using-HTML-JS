const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b047023a88msh3cd00bb8613500ep1383d1jsn0328faa11907",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather=(city)=>{
	cityName.innerHTML=city
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    cloud_pct.innerHTML = response.cloud_pct+" %"
    temp.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like+"°C"
    humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp+"°C"
    max_temp.innerHTML = response.max_temp+"°C"
    wind_speed.innerHTML = response.wind_speed+" Km/hr"
    wind_degrees.innerHTML = response.wind_degrees+" °"
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
  })
  .catch((err) => console.error(err));
}
submit.addEventListener("click",(e)=>{
 getWeather(city.value)
 e.preventDefault()
})

getWeather("Delhi")