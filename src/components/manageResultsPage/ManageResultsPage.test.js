import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageResultsPage} from './ManageResultsPage';

describe ('Manage Course Page', () => {
  it('sets error message upon blur of empty title field', () => {
    const props = {
      result: {
        name: "test",
        date: "",
        venue: "",
        winner: {
          driver: "",
          team: "",
          fastestLap: "",
          raceTime: ""
        }
      },
      actions: { createResult: () => { return Promise.resolve(); }},
    };
    
    const wrapper = shallow(<ManageResultsPage {...props}/>);
    expect(wrapper.state().result.name).toBe('test');
  });
});
