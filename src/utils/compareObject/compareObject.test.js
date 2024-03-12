const aObj = { hello: { hi: 'world' } };
const bObj = { hello: { hi: 'world' } };

test.skip('get warning when compare objects by using toBe ', () => {
  expect(aObj).toBe(bObj);
});

test('get true when compare objects by using toEqual', () => {
  expect(aObj).toEqual(bObj);
});

test('get true when compare objects by using toStrictEqual', () => {
  expect(aObj).toStrictEqual(bObj);
});

test('check array sparseness', () => {
  expect([undefined, undefined, undefined, undefined, undefined, 1]).toEqual([
    ,
    ,
    ,
    ,
    ,
    1,
  ]);
  expect([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    1,
  ]).not.toStrictEqual([, , , , , 1]);
});

test('check undefined in object', () => {
  expect({ a: undefined, b: 2 }).toEqual({ b: 2 });
  expect({ a: undefined, b: 2 }).not.toStrictEqual({ b: 2 });
});

test('check object types', () => {
  class Obj {
    constructor() {
      this.hello = 'world';
    }
  }

  expect(new Obj()).toEqual({ hello: 'world' });
  expect(new Obj()).not.toStrictEqual({ hello: 'world' });
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
