import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList';
import Total from './Total';

const SuperMarket = () => {
return <SuperMarketTemplate items={<ShopItemList />} basket={<BasketItemList />} total={<Total />}/>;
};

export default SuperMarket;