

const apiKey = '25f2ff7f2df168993782213cfb2966ae'; // ← Tu API Key de OpenWeatherMap
const city = 'Mendoza,AR';
const units = 'metric';

async function getWeather() {
  try {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;

    const weatherResponse = await fetch(weatherURL);
    const weatherData = await weatherResponse.json();

    document.getElementById("current-temp").textContent = `Temperature: ${weatherData.main.temp.toFixed(1)}°C`;

    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById("weather-desc").innerHTML = `
      Conditions: ${weatherData.weather[0].description} 
      <img src="${iconUrl}" alt="${weatherData.weather[0].description}">
    `;

    const forecastResponse = await fetch(forecastURL);
    const forecastData = await forecastResponse.json();

    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "<h3>3-Day Forecast</h3>";

    let daysShown = 0;
    let lastDate = "";

    forecastData.list.forEach(item => {
      const date = item.dt_txt.split(" ")[0];
      if (date !== lastDate && daysShown < 3) {
        forecastDiv.innerHTML += `<p>${date}: ${item.main.temp_max.toFixed(1)}°C</p>`;
        lastDate = date;
        daysShown++;
      }
    });
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}
getWeather();
