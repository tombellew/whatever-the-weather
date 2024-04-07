import { fetchWeatherApi } from 'openmeteo';

export interface IForecast {
  daily: {
    time: Date[];
    weatherCode: number[];
    temperature2mMax: number[];
    temperature2mMin: number[];
    windSpeed10mMax: number[];
  }
}

export const getForecast = async (latitude: number, longitude: number): Promise<IForecast>  => {
  // get the forecast form https://open-meteo.com/en/docs
  // code here was largely taken from the example in the documentation
  // hard coding the params since that's the requirement of the task

  const params = {
    "latitude": latitude,
    "longitude": longitude,
    "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min", "wind_speed_10m_max"],
    "wind_speed_unit": "mph",
    "forecast_days": 5
  };

  const url = "https://api.open-meteo.com/v1/forecast" as string;
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const daily = response.daily()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    daily: {
      time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000)
      ),
      weatherCode: Array.from(daily.variables(0)!.valuesArray()!),
      temperature2mMax: Array.from(daily.variables(1)!.valuesArray()!),
      temperature2mMin: Array.from(daily.variables(2)!.valuesArray()!),
      windSpeed10mMax: Array.from(daily.variables(3)!.valuesArray()!),
    },
  };

  return weatherData;
}