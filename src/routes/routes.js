import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import StandingsPage from '../components/standingsPage/StandingsPage';
import ResultsPage from '../components/resultsPage/ResultsPage';
import ManageResultsPage from '../components/manageResultsPage/ManageResultsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={StandingsPage}/>
    <Route path="results" component={ResultsPage}/>
    <Route path="addResult" component={ManageResultsPage}/>
  </Route>
);
