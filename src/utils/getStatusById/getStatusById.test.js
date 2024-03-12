import getStatusById from './getStatusById';

const mockList = [
  { id: 1, status: 'active' },
  { id: 2, status: 'inactive' },
  { id: 3, status: 'pending' },
];

// jest.mock('./filterList', () => {
//   return jest.fn().mockReturnValue({ status: 'active' });
// });

jest.mock('./filterList', () => {
  return jest.fn().mockImplementation((list, id) => mockList.filter((item) => item.id === id)[0]);
});

describe('getStatusById', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return active status when get element id 1', () => {
    const id = 1;
    const result = getStatusById(mockList, id);

    expect(result).toBe('active');
  });

  it('should return inactive status when get element id 2', () => {
    const id = 2;
    const result = getStatusById(mockList, id);

    expect(result).toBe('inactive');
  });
});
