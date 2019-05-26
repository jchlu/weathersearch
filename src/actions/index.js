import axios from 'axios'

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?APPID=${
  process.env.API_KEY
}`

export const SELECT_COUNTRY = 'SELECT_COUNTRY'
export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = (city, country) => {
  const url = `${ROOT_URL}&q=${city},${country}`
  const request = axios.get(url)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export const selectCountry = country => ({
  type: SELECT_COUNTRY,
  payload: country
})