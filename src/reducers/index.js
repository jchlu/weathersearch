import { combineReducers } from 'redux';
import CountryReducer from './countries'
import ActiveCountryReducer from './active_country'
import WeatherReducer from './weather'

const rootReducer = combineReducers({
  countries: CountryReducer,
  activeCountry: ActiveCountryReducer,
  weather: WeatherReducer
});

export default rootReducer;
