import { render, screen } from '@testing-library/react';
import Hello from './Hello';

describe('Hello', () => {
  it('should render the correct content 1', () => {
    render(<Hello />);

    const { textContent } = screen.getByText('這是測試文字');

    // expect(textElement).toBe('這是測試文字');
    expect(textContent).toBe('這是測試文字');
  });

  it('should render the correct content 2', () => {
    render(<Hello />);

    const { textContent } = screen.getByTestId('text');

    // expect(textElement).toBe('這是測試文字');
    expect(textContent).toBe('這是測試文字');
  });

  it('should render the correct content 3', () => {
    const { getByTestId } = render(<Hello />);

    expect(getByTestId('text').textContent).toBe('這是測試文字');
  });
});
