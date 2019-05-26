import { SELECT_COUNTRY } from '../actions/'

// Set the default to the Dominican Republic, reference the './countries.js' reducer for codes
export default (state = 'DO', action) => {
  switch (action.type) {
    case SELECT_COUNTRY:
      return action.payload
    default:
      return state
  }
}
