import { FETCH_WEATHER } from '../actions/'

export default (state = [], action) => {
  /* After middleware intercepts the Promise it populates the action with the request payload
   * console.log('Action received. ', action)
   * So this action object includes data */

  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]
  }
  return state
}
