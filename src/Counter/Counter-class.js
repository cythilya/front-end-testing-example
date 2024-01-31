import { Component } from 'react';

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <>
        <p data-test-id="counter-value">Count: {this.state.count}</p>
        <button data-test-id="decrement-button" onClick={this.decrement}>
          +
        </button>
        <button data-test-id="increment-button" onClick={this.increment}>
          -
        </button>
      </>
    );
  }
}

export default Counter;
