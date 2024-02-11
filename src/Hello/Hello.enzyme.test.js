import { mount } from 'enzyme';
import Hello from './Hello';

describe('Hello', () => {
  it('should render the correct content', () => {
    const wrapper = mount(<Hello />);

    expect(wrapper.find('[data-test-id="text"]').text()).toBe('這是測試文字');
  });
});
