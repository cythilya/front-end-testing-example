import getStatusById from './getStatusById';

const MOCK_LIST = [
  { id: 1, status: 'active' },
  { id: 2, status: 'inactive' },
  { id: 3, status: 'pending' },
];

// jest.mock('./filterList', () => {
//   return jest.fn().mockReturnValue({ status: 'active' });
// });

jest.mock('./filterList', () => {
  return jest.fn().mockImplementation((list, id) => MOCK_LIST.filter((item) => item.id === id)[0]);
});

describe('getStatusById', () => {
  it('should return active status when get element id 1', () => {
    const id = 1;
    const result = getStatusById(MOCK_LIST, id);
    expect(result).toBe('active');
  });

  it('should return inactive status when get element id 2', () => {
    const id = 2;
    const result = getStatusById(MOCK_LIST, id);
    expect(result).toBe('inactive');
  });
});
