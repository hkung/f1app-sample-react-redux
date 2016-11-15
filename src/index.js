import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, browserHistory} from 'react-router';
import routes from './routes/routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {getStandings} from './actions/standingActions';
import {getResults} from './actions/resultActions';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();

store.dispatch(getStandings());
store.dispatch(getResults());

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory} routes={routes}/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
