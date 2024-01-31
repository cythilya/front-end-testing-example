const aObj = { hello: { hi: 'world' } };
const bObj = { hello: { hi: 'world' } };

test.skip('get warning when compare objects by using toBe ', () => {
  expect(aObj).toBe(bObj);
});

test('get true when compare objects by using toEqual', () => {
  expect(aObj).toEqual(bObj);
});
