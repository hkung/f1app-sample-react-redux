import React from 'react';
import { shallow } from 'enzyme';
import ResultCard from './ResultCard';

const testResult = {
  name: "Test Grand Prix",
  date: "2016-11-13",
  venue: "testVenue",
  winner: {
    driver: "Test Driver",
    team: "Mercedes",
    fastestLap: "1:05",
    raceTime: "10:01"
  }
};

it('renders without crashing', () => {
  shallow(<ResultCard result={testResult}/>);
});
