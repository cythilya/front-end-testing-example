import { render } from '@testing-library/react';
import ElementList from './ElementList';

describe('ElementList', () => {
  it('should display the elements correctly', () => {
    const { getByTestId, queryAllByTestId } = render(<ElementList />);

    // 檢查顯示的元素是否存在
    expect(getByTestId('visible-element')).toBeVisible();
    expect(getByTestId('visible-element')).toBeInTheDocument();
    expect(queryAllByTestId('visible-element')).toHaveLength(1);
    expect(getByTestId('visible-element')).toMatchSnapshot();

    // 檢查隱藏的元素是否存在
    expect(getByTestId('invisible-element')).not.toBeVisible();
    expect(getByTestId('invisible-element')).toBeInTheDocument();
    expect(queryAllByTestId('invisible-element')).toHaveLength(1);
    expect(getByTestId('invisible-element')).toMatchSnapshot();
  });
});
