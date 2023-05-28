const weatherContainer = document.getElementById('weather-container');
const airQualityContainer = document.getElementById('air-quality-container');

function fetchWeather() {
  const weatherApiKey = '753fda8904e3d55eb7c6e8f01039b7d4'; // Reemplaza 'TU_API_KEY' con tu propia clave de API de OpenWeatherMap
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Monterrey,mx&appid=${weatherApiKey}&units=metric`;

  axios.get(weatherApiUrl)
    .then(response => {
      const weatherData = response.data;
      const temperature = weatherData.main.temp;
      const description = weatherData.weather[0].description;

      weatherContainer.innerHTML = `
        <p>Temperatura: ${temperature}°C</p>
        <p>Descripción: ${description}</p>
      `;
    })
    .catch(error => {
      console.error('Error al obtener el clima:', error);
      weatherContainer.innerHTML = `<p>Error al obtener el clima</p>`;
    });
}

function fetchAirQuality() {
  const airQualityApiKey = '454cc0fc-4797-42b5-8e61-0752709de306'; // Reemplaza 'TU_API_KEY' con tu propia clave de API de AirVisual
  const airQualityApiUrl = `https://api.airvisual.com/v2/city?city=Monterrey&state=Nuevo%20Leon&country=Mexico&key=${airQualityApiKey}`;

  axios.get(airQualityApiUrl)
    .then(response => {
      const airQualityData = response.data.data.current.pollution;
      const aqi = airQualityData.aqius;
      const mainPollutant = airQualityData.mainus;
      const timestamp = airQualityData.ts;

      airQualityContainer.innerHTML = `
        <p>Índice de Calidad del Aire (AQI): ${aqi}</p>
        <p>Contaminante Principal: ${mainPollutant}</p>
        <p>Última actualización: ${timestamp}</p>
      `;
    })
    .catch(error => {
      console.error('Error al obtener la calidad del aire:', error);
      airQualityContainer.innerHTML = `<p>Error al obtener la calidad del aire</p>`;
    });
}

function updateRealTimeData() {
  fetchWeather();
  fetchAirQuality();

  setInterval(() => {
    fetchWeather();
    fetchAirQuality();
  }, 600000);
}

updateRealTimeData();