import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter-class';

describe('Counter component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  test('increments the counter value on button click', () => {
    const incrementButton = wrapper.find('[data-test-id="increment-button"]');

    incrementButton.simulate('click');

    expect(wrapper.state('count')).toEqual(1);
  });

  test('decrements the counter value on button click', () => {
    const decrementButton = wrapper.find('[data-test-id="decrement-button"]');

    decrementButton.simulate('click');

    expect(wrapper.state('count')).toEqual(-1);
  });
});
