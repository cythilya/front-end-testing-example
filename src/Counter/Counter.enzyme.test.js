import React from 'react';
import { mount } from 'enzyme';
import Counter from './Counter';

describe('Counter component', () => {
  it('should get 1 when click the increment button', () => {
    const wrapper = mount(<Counter />);
    wrapper.find('[data-test-id="increment-button"]').simulate('click');
    expect(wrapper.find('[data-test-id="counter-value"]').text()).toBe('1');
  });
});
