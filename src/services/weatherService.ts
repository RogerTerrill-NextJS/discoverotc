import {WeatherData} from "@/data/types";

export const getWeatherCondition = (code: number): { label: string; icon: string } => {
  // WMO Weather interpretation codes (WW)
  // https://open-meteo.com/en/docs
  if (code === 0) return {label: "Clear Sky", icon: "☀️"};
  if (code >= 1 && code <= 3) return {label: "Partly Cloudy", icon: "⛅"};
  if (code === 45 || code === 48) return {label: "Fog", icon: "🌫️"};
  if (code >= 51 && code <= 55) return {label: "Drizzle", icon: "🌦️"};
  if (code >= 61 && code <= 65) return {label: "Rain", icon: "🌧️"};
  if (code >= 71 && code <= 77) return {label: "Snow", icon: "❄️"};
  if (code >= 80 && code <= 82) return {label: "Showers", icon: "🌧️"};
  if (code >= 95 && code <= 99) return {label: "Thunderstorm", icon: "⛈️"};
  return {label: "Unknown", icon: "🌡️"};
};

export const fetchAirportWeather = async (lat: number, lon: number): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto&forecast_days=4`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    return {
      current: {
        temp: data.current.temperature_2m,
        windSpeed: data.current.wind_speed_10m,
        weatherCode: data.current.weather_code,
        precipitation: data.current.precipitation,
      },
      daily: data.daily.time.slice(1, 4).map((date: string, index: number) => ({
        date: new Date(date).toLocaleDateString('en-US', {weekday: 'short'}),
        maxTemp: data.daily.temperature_2m_max[index + 1],
        minTemp: data.daily.temperature_2m_min[index + 1],
        weatherCode: data.daily.weather_code[index + 1],
      })),
    };
  } catch (error) {
    console.error("Weather service error:", error);
    throw error;
  }
};