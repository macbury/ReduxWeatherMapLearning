import * as axios from "axios";
const { API_KEY } = require('../../settings.json');

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(term : string) {
  const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${term}&units=metric&cnt=7&appid=${API_KEY}`;
  return {
    type: FETCH_WEATHER,
    payload: axios.get(url)
  }
}
