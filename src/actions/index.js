import axios from 'axios'

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?APPID=${
  process.env.API_KEY
}`

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const SELECT_COUNTRY = 'SELECT_COUNTRY'
export const SELECT_UNIT = 'SELECT_UNIT'

export const fetchWeather = (city, country) => {
  const url = `${ROOT_URL}&q=${city},${country}`
  const request = axios.get(url)

  // At this stage, the request is a promise, assigned to the payload key.
  // console.log('Request: ' ,request)
  /* It's intercepted by middleware and then populated once the payload returns
   * MiddleWare can manipulate or "gate keep" actions before they hit reducers.
   * If the payload is a Promise, 'redux-promise' stalls until the Promise is
   * resolved, then it delivers the action to the reducer with the payload populated */

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export const selectCountry = country => ({
  type: SELECT_COUNTRY,
  payload: country
})

export const selectUnit = unit => ({
  type: SELECT_UNIT,
  payload: unit
})
