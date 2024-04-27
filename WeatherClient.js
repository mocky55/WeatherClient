



const getForecast = async () => {
    const forecastResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
const forecast = await forecastResponse.json()
console.log(`latitude: ${forecast.latitude}`+" longitude: " + forecast.longitude)
}
getForecast()