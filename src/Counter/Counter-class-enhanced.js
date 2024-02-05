import { Component } from 'react';
import CounterValue from './CounterValue';
import DecrementButton from './DecrementButton';
import IncrementButton from './IncrementButton';

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
        <CounterValue count={this.state.count} />
        <DecrementButton onClick={this.decrement} />
        <IncrementButton onClick={this.increment} />
      </>
    );
  }
}

export default Counter;
