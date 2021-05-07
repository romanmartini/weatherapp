'use strict'
import {fictitiuosData, accessKeyWeather, accessKeyIP} from './variables.js'
let query;

let $formCity = document.getElementById('form-city');

// Weather Variables - DOM
let $nameCity = document.getElementById('city-name');
let $monthDate = document.getElementById('month-day');
let $hour = document.getElementById('hour');
let $weatherIcons = document.getElementById('weather-icons');
let $weatherDescription = document.getElementById('weather-description');
let $temperature = document.getElementById('temperature');
let $humidity = document.getElementById('humidity');
let $precip = document.getElementById('precip');
let $windSpeed = document.getElementById('wind-speed');
let $errorMessage = document.querySelector('.box-error-message');

const getMonth = (n) => {
    n--
    let month = ['January','February','March','April','May','June','July','August','September','October','November','December']
    month.forEach((el,i) => (i === n) ? month = el: null)
    return month
}

const getIP = async () =>{
    let res = await fetch(`http://api.ipstack.com/check?access_key=${accessKeyIP[0]}`);
    let json = await res.json();
    return json.ip
}
const getWeather = async (e) => {

    if (e.type === 'DOMContentLoaded') query = await getIP()
    
    let resWeather = await fetch(`http://api.weatherstack.com/current?access_key=${accessKeyWeather[1]}&query=${query}`);
    let json = await resWeather.json();
    console.log(resWeather.url)


    if(json.error) {
        json = fictitiuosData;
        $errorMessage.classList.add('is-active');
        document.querySelector('.closed-message').addEventListener('click', (e) => $errorMessage.classList.remove('is-active'))
    }
    let weatherData = {
        location : `${json.location.name}, ${json.location.region}`,
        temperature : `${json.current.temperature}°c`,
        description : json.current.weather_descriptions[0],
        icons : json.current.weather_icons[0],
        humidity : json.current.humidity,
        precip : json.current.precip,
        wind : json.current.wind_speed,
        localtime: json.location.localtime,
    }
    weatherData.month = weatherData.localtime.split(' ')[0].split('-')[1];
    weatherData.date = weatherData.localtime.split(' ')[0].split('-')[2];
    
    $nameCity.innerHTML = weatherData.location;
    $monthDate.innerHTML = getMonth(weatherData.month) +' '+  weatherData.date;
    $hour.innerHTML = weatherData.localtime.split(' ')[1];
    $weatherIcons.setAttribute('src', weatherData.icons),
    // $weatherDescription.innerHTML = weatherData.description;
    $temperature.innerHTML = weatherData.temperature;
    $humidity.innerHTML = weatherData.humidity;
    $precip.innerHTML = weatherData.precip;
    $windSpeed.innerHTML = weatherData.wind;
}


$formCity.addEventListener('submit', e => {
    e.preventDefault()
    query = document.getElementById('input-city').value;
    getWeather(e)
    document.getElementById('input-city').value = '';
    console.log('submit ok')
})

document.addEventListener('DOMContentLoaded', e => getWeather(e));