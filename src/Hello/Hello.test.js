import { render } from '@testing-library/react';
import Hello from './Hello';

describe('Hello', () => {
  it('should render the correct content', () => {
    const { getByText } = render(<Hello />);

    expect(getByText('這是測試文字').textContent).toBe('這是測試文字');
  });

  it('should render the correct content 1', () => {
    const { getByText } = render(<Hello />);

    expect(getByText('這是測試文字')).toHaveTextContent('這是測試文字');
  });

  it('should render the correct content 2', () => {
    const { getByTestId } = render(<Hello />);

    expect(getByTestId('text')).toHaveTextContent('這是測試文字');
  });

  it('should render the correct content 3', () => {
    const { getByTestId } = render(<Hello />);

    expect(getByTestId('text')).toHaveTextContent('這是測試文字');
  });

  it('should render the correct content 4', () => {
    const { queryAllByTestId } = render(<Hello />);
    // const { queryAllByTestId, getAllByTestId } = render(<Hello />);

    // expect(getAllByTestId('text-1').length).toBe(0)
    expect(queryAllByTestId('text-2').length).toBe(0);
  });
});
