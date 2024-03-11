import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createRenderer } from 'react-test-renderer/shallow';
import Counter from './Counter-enhanced';

describe('Counter component', () => {
  describe('shallowing rendering', () => {
    let counter;
    const renderer = createRenderer();
    const renderCounter = () => renderer.render(<Counter />);

    beforeEach(() => {
      counter = renderCounter();
    });

    afterEach(() => {
      renderer.unmount();
    });

    it('should get snapshot correctly', () => {
      const counter = renderer.render(<Counter />);

      expect(counter).toMatchSnapshot();
    });
  });

  describe('full rendering', () => {
    let counter;
    const renderCounter = () => <Counter />;

    beforeEach(() => {
      counter = render(renderCounter());
    });

    afterEach(() => {
      counter.unmount();
    });

    it('should get snapshot correctly', () => {
      expect(counter.container).toMatchSnapshot();
    });

    it('should get 1 when click the increment button', () => {
      const { getByTestId } = counter;

      fireEvent.click(getByTestId('increment-button'));

      expect(getByTestId('counter-value')).toHaveTextContent('1');
    });
  });
});
