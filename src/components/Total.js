import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(({ marketStore }) => ({
  totalCount: marketStore.totalCount,
  totalPrice: marketStore.totalPrice,
}))

@observer
class Total extends Component {
  render() {
    const { totalCount, totalPrice } = this.props;

    return (
      <div>
        <hr />
        <p>
          <b>총합 가격: </b> { totalPrice }원
          <b>, 개수: </b>{ totalCount }개
        </p>
      </div>
    );
  }
}

export default Total;