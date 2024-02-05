import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Counter from './Counter-class-enhanced';

describe('Counter component', () => {
  // shallow
  test('should shallow render component correctly', () => {
    const wrapper = shallow(<Counter />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should increment the counter value to 1 when calling increment method', () => {
    const wrapper = shallow(<Counter />);

    wrapper.instance().increment();

    expect(wrapper.state('count')).toEqual(1);
  });

  // mount
  test('should mount component correctly', () => {
    const wrapper = mount(<Counter />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should increment the counter value to 1 when clicking increment button ', () => {
    const wrapper = mount(<Counter />);

    const incrementButton = wrapper.find('[data-test-id="increment-button"]');
    incrementButton.simulate('click');

    expect(wrapper.state('count')).toEqual(1);
  });
});
