import axios from 'axios';

import APIKeys from '../../keys';
const API_KEY = APIKeys.weatherApiKey;
const ROUTE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROUTE_URL}&q=${city},gb`
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
