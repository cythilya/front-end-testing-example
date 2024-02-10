const Counter = require('./Counter-constructor');

describe('Counter class', () => {
  let counter = new Counter();

  beforeEach(() => {
    counter = new Counter();
  });

  test('[dev1] should get 1 when increment', () => {
    counter.increment();
    expect(counter.getCount()).toBe(1);
  });

  test('[dev2] should get -1 when decrease', () => {
    counter.decrement();
    expect(counter.getCount()).toBe(-1);
  });
});
