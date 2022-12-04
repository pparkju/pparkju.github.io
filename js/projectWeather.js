const API_KEY = "ef98ef1662ff71c4c5918e1058bc3af8";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  //   console.log("You live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  //   console.log(url);
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      //console.log(data.name, data.weather[0].main); //api의 network정보에 있는 json 정보
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      //   const name = data.name;
      //   const weather = data.weather[0].main;
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
