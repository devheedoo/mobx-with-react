import React from 'react';
import ShopItem from './ShopItem';
import { inject, observer } from 'mobx-react';

const items = [
  { name: '생수', price: 850, },
  { name: '신라면', price: 900, },
  { name: '포카칩', price: 1500, },
  { name: '새우깡', price: 1000, },
];

// TODO: inject, observer를 decorator 방식으로 작성하기
const ShopItemList = ({ onPut }) => {
  const itemList = items.map(item => (
    <ShopItem {...item} key={item.name} onPut={onPut} />
  ));
  return <div>{ itemList }</div>;
};

export default inject(({ marketStore }) => ({
  onPut: marketStore.put,
}))(observer(ShopItemList));