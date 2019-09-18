import React from 'react';
import BasketItem from './BasketItem';
import { inject, observer } from 'mobx-react';

@inject(({ marketStore }) => ({
  items: marketStore.selectedItems,
  total: marketStore.total,
  onTake: marketStore.take,
  takeAll: marketStore.takeAll,
}))

@observer
class BasketItemList extends React.Component {
  render() {
    const { items, total, onTake, takeAll } = this.props;

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
          <b>총합: </b> { total }원
        </p>
        <button onClick={() => takeAll()}>전부 내려놓기</button>
      </div>
    );
  }
}

export default BasketItemList;