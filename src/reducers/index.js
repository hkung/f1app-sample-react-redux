import { combineReducers } from 'redux';
import standings from './standingReducer';
import results from './resultReducer';

const rootReducer = combineReducers({
  standings,
  results
});

export default rootReducer;
