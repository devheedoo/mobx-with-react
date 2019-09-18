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
        item={item}
        key={item.name}
        onTake={onTake}
      />
    ));

    return (
      <div>
        <button style={{ marginBottom: '10px' }} onClick={() => takeAll()}>전부 내려놓기</button>
        { itemList }
      </div>
    );
  }
}

export default BasketItemList;