import initialState from './initialState';
import * as types from '../actions/types';

export default function results(state = initialState.results, action) {
  switch (action.type) {
    case types.GET_RESULTS_SUCCESS:
      return action.results;

    case types.CREATE_RESULT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.result)
      ];

    default:
      return state;
  }
}
