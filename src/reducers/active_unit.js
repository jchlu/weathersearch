import { SELECT_UNIT } from '../actions/'

// Set the default to the Dominican Republic, reference the './countries.js' reducer for codes
export default (state = 'metric', action) => {
  switch (action.type) {
    case SELECT_UNIT:
      return action.payload
  }
  return state
}
