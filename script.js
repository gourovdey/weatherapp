const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e07d04eeb2mshbe2311831234655p16170bjsna20a4ffbca53',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };
  

  
const getWeather = (City) =>{
    askedCity.innerHTML = City.charAt(0).toUpperCase() + City.slice(1)

    fetch('https://yahoo-weather5.p.rapidapi.com/weather?format=json&u=c&location='+City, options)
    .then(response => response.json())
    .then(response => {
        
        document.getElementById('temp').innerHTML = response.current_observation.condition.temperature
        document.getElementById('weather-condition').innerHTML = response.current_observation.condition.text
        sunrise.innerHTML = response.current_observation.astronomy.sunrise
        sunset.innerHTML = response.current_observation.astronomy.sunset

        humidity.innerHTML = response.current_observation.atmosphere.humidity
        visibility.innerHTML = response.current_observation.atmosphere.visibility
        pressure.innerHTML = response.current_observation.atmosphere.pressure

        wind_speed.innerHTML = response.current_observation.wind.speed
        wind_direction.innerHTML = response.current_observation.wind.direction
        wind_chill.innerHTML = response.current_observation.wind.chill

    })
    .catch(err => console.error(err));
}
  

mybuton.addEventListener("click", (e)=>{
    e.preventDefault()
    let city_name = document.getElementById("searchCity");
    getWeather(city_name.value)
})


getWeather("Delhi")


const otherCityWeather = (myCity, classname) =>{

    fetch('https://yahoo-weather5.p.rapidapi.com/weather?format=json&u=c&location='+myCity, options)
    .then(response => response.json())
    .then(response => {
        

        document.querySelectorAll("."+classname)[0].innerHTML = response.current_observation.condition.temperature
        
        document.querySelectorAll("."+classname)[1].innerHTML = response.current_observation.wind.speed
       
        
        document.querySelectorAll("."+classname)[2].innerHTML = response.current_observation.atmosphere.visibility
        
        document.querySelectorAll("."+classname)[3].innerHTML = response.current_observation.atmosphere.pressure
        
        document.querySelectorAll("."+classname)[4].innerHTML = response.current_observation.atmosphere.humidity
        
        document.querySelectorAll("."+classname)[5].innerHTML = response.current_observation.condition.text
    })
}

otherCityWeather("Shanghai", "shn")
otherCityWeather("Tokyo", "tky")
otherCityWeather("Seoul", "sk")
otherCityWeather("Kolkata", "kol")
otherCityWeather("Sydney", "syd")
otherCityWeather("Moscow", "msk")
