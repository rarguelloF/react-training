import React from 'react';

import expect from 'expect.js';
import { shallow } from 'enzyme';

import QuantitySelector from './QuantitySelector';


describe('<QuantitySelector />', () => {
  it('has 2 <button /> and 1 <input /> for units measurement', () => {
    const wrapper = shallow(
      <QuantitySelector
        value={2.5}
        measurement="1"
        setValue={() => null}
      />,
    );

    expect(wrapper.find('button')).to.have.length(2);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('has a <select /> for weight measurement', () => {
    const wrapper = shallow(
      <QuantitySelector
        value={2.5}
        measurement="2"
        setValue={() => null}
      />,
    );

    expect(wrapper.find('select')).to.have.length(1);
  });
});
