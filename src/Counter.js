import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('counterStore')
@observer
class Counter extends Component {
  // @observable number = 0;

  // @action
  // increase = () => {
  //   this.number++;
  // }

  // @action
  // decrease = () => {
  //   this.number--;
  // }

  render() {
    const { counterStore } = this.props;
    return (
      <div>
        <h1>{counterStore.counter}</h1>
        <button onClick={counterStore.increase}>+1</button>
        <button onClick={counterStore.decrease}>-1</button>
      </div>
    )
  }
}

export default Counter;