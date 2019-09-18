import { observable, action, computed } from 'mobx';

export default class MarketStore {
  @observable selectedItems = [];
  // selectedItem: { name, price, count }

  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  
  @action
  put = (name, price) => {
    const { counter } = this.rootStore.counterStore;
    if (counter !== 0) {
      const exists = this.selectedItems.find(item => item.name === name);
      if (!exists) {
        this.selectedItems.push({
          name,
          price,
          count: counter,
        });
        return;
      }
      exists.count += counter;
    }
  };

  @action
  take = name => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    itemToTake.count--;
    if (itemToTake.count === 0) {
      this.selectedItems.remove(itemToTake);
    }
  };

  @action
  takeAll = () => {
    this.selectedItems = [];
  };

  @computed
  get totalCount() {
    return this.selectedItems.reduce((prev, curr) => {
      return prev + curr.count;
    }, 0);
  }

  @computed
  get totalPrice() {
    return this.selectedItems.reduce((prev, curr) => {
      return prev + (curr.price * curr.count);
    }, 0);
  }
}