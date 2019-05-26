import { combineReducers } from 'redux';
import CountryReducer from './countries'
import ActiveCountryReducer from './active_country'

const rootReducer = combineReducers({
  countries: CountryReducer,
  activeCountry: ActiveCountryReducer
});

export default rootReducer;
