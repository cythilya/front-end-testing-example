import bakeAllCakes, { bakeMatchaRoll } from './bakeUtils';

jest.mock('./bakeUtils', () => {
  const originalModule = jest.requireActual('./bakeUtils');

  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn().mockImplementation(() => {
      console.log('Mocking bakeAllCakes()')
      return 'Chocolate Pudding and Matcha Roll are all baked.'
    }),
  };
});

describe('bakeUtils', () => {
  it('bakeAllCakes: should bake Chocolate Pudding and Matcha Roll', () => {
    expect(bakeAllCakes()).toBe(
      'Chocolate Pudding and Matcha Roll are all baked.'
    );
  });

  it('bakeMatchaRoll: should bake Matcha Roll', () => {
    expect(bakeMatchaRoll()).toBe('Matcha Roll is baked.');
  });
});
