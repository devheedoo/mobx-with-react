import React from 'react';
import BasketItem from './BasketItem';
import { inject, observer } from 'mobx-react';

@inject(({ marketStore }) => ({
  items: marketStore.selectedItems,
  totalCount: marketStore.totalCount,
  totalPrice: marketStore.totalPrice,
  onTake: marketStore.take,
  takeAll: marketStore.takeAll,
}))

@observer
class BasketItemList extends React.Component {
  render() {
    const { items, totalCount, totalPrice, onTake, takeAll } = this.props;

    const itemList = items.map(item => (
      <BasketItem
        name={item.name}
        price={item.price}
        count={item.count}
        key={item.name}
        onTake={onTake}
      />
    ));

    return (
      <div>
        { itemList }
        <hr />
        <p>
          <b>총합 가격: </b> { totalPrice }원
          <b>, 개수: </b>{ totalCount }개
        </p>
        <button onClick={() => takeAll()}>전부 내려놓기</button>
      </div>
    );
  }
}

export default BasketItemList;