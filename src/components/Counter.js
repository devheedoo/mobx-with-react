import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(({ counterStore }) => ({
  counter: counterStore.counter,
  increase: counterStore.increase,
  decrease: counterStore.decrease,
}))

@observer
class Counter extends Component {
  render() {
    const { counter, increase, decrease } = this.props;
    return (
      <div>
        <h1>한 번에 <span style={{ color: 'green' }}>{counter}</span>개씩 장바구니에 담습니다.</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    )
  }
}

export default Counter;