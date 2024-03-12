const aObj = { hello: { hi: 'world' } };
const bObj = { hello: { hi: 'world' } };

test.skip('get warning when compare objects by using toBe ', () => {
  expect(aObj).toBe(bObj);
});

test('get true when compare objects by using toEqual', () => {
  expect(aObj).toEqual(bObj);
});

test.skip('get propery error message when using toBeNull', () => {
  expect(1).toBe(null);
  // expect(1).toEqual(null);
  // expect(1).toBeNull();
  // expect(1).toBeDefined();
});

test.skip('get propery error message when using toBeUndefined', () => {
  // expect(1).toBe(undefined);
  // expect(1).toEqual(undefined);
  // expect(1).toBeNull();
  expect(1).toBeUndefined();
});
