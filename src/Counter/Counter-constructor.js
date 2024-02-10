class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  getCount() {
    return this.count;
  }
}

module.exports = Counter;
