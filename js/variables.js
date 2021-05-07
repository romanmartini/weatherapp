export {fictitiuosData, accessKeyWeather, accessKeyIP};

/* =========================================================== 
/ Functions
=========================================================== */

const getLocalDate = () => {
    let currentDate = new Date;
    let date = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let hour = currentDate.toLocaleTimeString().split(':');

    return `${year}-${month}-${date} ${hour[0] + ':' + hour[1]}`;
}
const getRandomCity = () => {
    let city = [
        {city: 'Villa María', region: 'Córdoba', country: 'Argentina'},
        {city: 'Las Varillas', region: 'Córdoba', country: 'Argentina'},
        {city: 'Villa Carlos Paz', region: 'Córdoba', country: 'Argentina'},
        {city: 'Sta. Rosa de Calamuchita', region: 'Córdoba', country: 'Argentina'},
        {city: 'Alicia', region: 'Córdoba', country: 'Argentina'},
        {city: 'Las Varas', region: 'Córdoba', country: 'Argentina'},
        {city: 'Rosario', region: 'Santa Fe', country: 'Argentina'},
        {city: 'Paraná', region: 'Entre Ríos', country: 'Argentina'},
        {city: 'San Francisco', region: 'Córdoba', country: 'Argentina'},
        {city: 'New York', region: 'New York', country: 'United States of America'},
    ]
}

/* =========================================================== 
/ Variables
=========================================================== */

/*  Access Keey
============================= */

const accessKeyWeather = ['d07e6aa1a3edbe6ec064426e11b08704', '440d9503e9e1b03144343942df69dca4'];
const accessKeyIP = ['d30e36629a8b15e67e9be0035447b761'];

/*  Fictitiuos Data
============================= */

let fictitiuosData = {
    current : {
        temperature : Math.round(Math.random()*30),
        weather_descriptions : ["party"],
        weather_icons : ["./assets/world.svg"],
        humidity : Math.round(Math.random()*100),
        precip: Math.round(Math.random()*100),
        wind_speed : Math.round(Math.random()*30)
    },
    location : {
        name : "Villa María",
        region : "Cordoba",
        localtime : getLocalDate()
        
        
    }
    
}