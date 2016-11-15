import StandingsEndpoint from '../api/mockStandingsEndpoint';
import * as types from './types';

export function getStandingsSuccess(standings) {
  return {type: types.GET_STANDINGS_SUCCESS, standings};
}

export function getStandings() {
  return function (dispatch) {
    return StandingsEndpoint.getAllStandings().then(standings => {
      dispatch(getStandingsSuccess(standings));
    }).catch(error => {
      throw(error);
    });
  };
}
