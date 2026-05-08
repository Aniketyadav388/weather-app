const apiKey = "436e26c53678cd73844ec713556e4e71";

async function getWeather(){

  const city = document.getElementById("city").value;

  const loading = document.getElementById("loading");

  const weatherBox = document.getElementById("weather");

  loading.style.display = "block";

  weatherBox.style.display = "none";

  try{

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    if(data.cod == "404"){
      alert("City not found");
      loading.style.display = "none";
      return;
    }

    document.getElementById("temp").innerHTML =
      Math.round(data.main.temp) + "°C";

    document.getElementById("cityName").innerHTML =
      data.name;

    document.getElementById("desc").innerHTML =
      data.weather[0].description;

    document.getElementById("humidity").innerHTML =
      data.main.humidity + "%";

    document.getElementById("wind").innerHTML =
      data.wind.speed + " km/h";

    document.getElementById("icon").src =
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    loading.style.display = "none";

    weatherBox.style.display = "block";

  }

  catch(error){

    alert(" Dya kuch to gad bad hai...?");

    loading.style.display = "none";

  }

}
