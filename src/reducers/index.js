import { combineReducers } from 'redux'
import ActiveCountryReducer from './active_country'
import ActiveUnitReducer from './active_unit'
import CountryReducer from './countries'
import WeatherReducer from './weather'

export default combineReducers({
  activeCountry: ActiveCountryReducer,
  activeUnit: ActiveUnitReducer,
  countries: CountryReducer,
  weather: WeatherReducer
})
