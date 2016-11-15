import ResultsEndpoint from '../api/mockResultsEndpoint';
import * as types from './types';

export function getResultsSuccess(results) {
  return {type: types.GET_RESULTS_SUCCESS, results};
}

export function createResultSuccess(result) {
  return {type: types.CREATE_RESULT_SUCCESS, result};
}

export function getResults() {
  return function (dispatch) {
    return ResultsEndpoint.getAllResults().then(results => {
      dispatch(getResultsSuccess(results));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createResult(result) {
  return function (dispatch, getState) {
    return ResultsEndpoint.createResult(result).then(result => {
      dispatch(createResultSuccess(result));
    }).catch(error => {
      throw(error);
    });
  };
}
