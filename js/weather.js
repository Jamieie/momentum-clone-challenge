const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const API_KEY = "751fb187c33cade1c1361a372c6e0672";


function geoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    fetch(url).then((response) => response.json().then((data) => {
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    }));
}

function error() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(geoOk, error);
