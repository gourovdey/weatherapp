const options = {
    method: 'GET',
    headers: {'X-RapidAPI-Key': '1879196cb0msha21c9c10f0a5493p1552e0jsne5aa2c930959'}
  };
  

const getWeather = (City) =>{
    askedCity.innerHTML = City.charAt(0).toUpperCase() + City.slice(1)
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+City, options)
    .then(response => response.json())
    .then((response) => {
        

        /* cloud_pct.innerHTML = response.cloud_pct */

        document.getElementById('temp').innerHTML = response.temp
        /* temp.innerHTML = response.temp */

        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
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

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+myCity, options)
    .then(response => response.json())
    .then((response) => {
        

        document.querySelectorAll("."+classname)[0].innerHTML = response.temp
        document.querySelectorAll("."+classname)[1].innerHTML = response.max_temp
        document.querySelectorAll("."+classname)[2].innerHTML = response.min_temp
        document.querySelectorAll("."+classname)[3].innerHTML = response.humidity
        document.querySelectorAll("."+classname)[4].innerHTML = response.wind_speed
        document.querySelectorAll("."+classname)[5].innerHTML = response.feels_like
        document.querySelectorAll("."+classname)[6].innerHTML = response.wind_degrees
        document.querySelectorAll("."+classname)[7].innerHTML = response.sunrise
        document.querySelectorAll("."+classname)[8].innerHTML = response.sunset
    })
}

otherCityWeather("Shanghai", "shn")
otherCityWeather("Tokyo", "tky")
otherCityWeather("Seoul", "sk")
otherCityWeather("Kolkata", "kol")
otherCityWeather("Sydney", "syd")
otherCityWeather("Moscow", "msk")






    


    
/*     const url = 'https://weather-by-api-ninjas.p.rapid2api.com/v1/weather?city=Delhi';
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '1879196cb0msha21c9c10f0a5493p1552e0jsne5aa2c930959',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    


async function test(){
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

test() */