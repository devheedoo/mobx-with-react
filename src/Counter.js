import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// @inject('counterStore')
@inject(stores => ({
  counter: stores.counterStore.counter,
  increase: stores.counterStore.increase,
  decrease: stores.counterStore.decrease,
}))
@observer
class Counter extends Component {
  render() {
    const { counter, increase, decrease } = this.props;
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    )
  }
}

export default Counter;