
const apiKey = "f3a3033297328ad0b7691010c6ad385f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector('.search button');
const weatherIcons = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    } else {
        var data = await response.json();
        console.log(data)

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";


        // image 
        if (data.weather[0].main == "Clouds") {
            weatherIcons.src = 'img/clouds.png';
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcons.src = 'img/clear.png';
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcons.src = 'img/rain.png';
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcons.src = 'img/drizzle.png';
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcons.src = 'img/mist.png';
        }

        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = 'none'

    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);

})
