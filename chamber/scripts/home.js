/***********************
 * HAMBURGER MENU
 ***********************/
const menuButton = document.querySelector("#myButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});

/***********************
 * FOOTER DATES
 ***********************/
document.querySelector("#copyright-year").textContent =
  new Date().getFullYear();

document.querySelector("#last-modified").textContent =
  `Last Modified: ${document.lastModified}`;

/***********************
 * WEATHER – MENDOZA
 ***********************/
const apiKey = "290425e16069ed5ebd6566c0ee0b5487";
const lat = -32.8895;
const lon = -68.8458;

const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const forecastList = document.querySelector("#forecast-list");

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    // CURRENT WEATHER
    currentTemp.textContent = `🌡️ ${Math.round(data.list[0].main.temp)}°C`;
    weatherDesc.textContent =
      data.list[0].weather[0].description;

    // 3-DAY FORECAST (12:00)
    forecastList.innerHTML = "";
    const forecasts = data.list.filter(item =>
      item.dt_txt.includes("12:00:00")
    ).slice(0, 3);

    forecasts.forEach(day => {
      const li = document.createElement("li");
      const date = new Date(day.dt_txt);
      li.textContent = `${date.toLocaleDateString("en-US", {
        weekday: "short"
      })}: ${Math.round(day.main.temp)}°C`;
      forecastList.appendChild(li);
    });

  } catch (error) {
    currentTemp.textContent = "Weather unavailable";
    console.error(error);
  }
}

getWeather();

/***********************
 * MEMBER SPOTLIGHTS
 ***********************/
const spotlightContainer = document.querySelector("#spotlight-cards");

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();

    // Only Gold & Silver
    const eligible = members.filter(
      member => member.membership === "Gold" || member.membership === "Silver"
    );

    // Shuffle
    eligible.sort(() => 0.5 - Math.random());

    // Pick 2–3
    const spotlights = eligible.slice(0, 3);

    spotlightContainer.innerHTML = "";

    spotlights.forEach(member => {
      const card = document.createElement("section");
      card.classList.add("member-card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="membership">${member.membership} Member</p>
      `;

      spotlightContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading spotlights:", error);
  }
}

loadSpotlights();






