import initialState from './initialState';
import * as types from '../actions/types';

export default function standings(state = initialState.standings, action) {
  switch (action.type) {
    case types.GET_STANDINGS_SUCCESS:
      return action.standings;

    default:
      return state;
  }
}
