import React from 'react';
import {mount, shallow} from 'enzyme';
import ManageResultsForm from './ManageResultsForm';

function setup() {
  const props = {
    result: {},
    onSave: () => {},
    onChange: () => {},
    saving: false,
    errors: {},
  };

  return shallow(<ManageResultsForm {...props} />);
}

describe('ManageResultsForm', () => {
  it('renders form and h3', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h3').text()).toEqual('Add new result');
  });
});
