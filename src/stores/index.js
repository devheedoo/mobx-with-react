import CounterStore from './CounterStore';
import MarketStore from './MarketStore';

class RootStore {
  constructor() {
    this.counterStore = new CounterStore(this);
    this.marketStore = new MarketStore(this);
  }
}

export default RootStore;