import { observable, action } from 'mobx';

export default class CounterStore {
  @observable counter = 0;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action increase = () => {
    this.counter++;
  }

  @action decrease = () => {
    this.counter--;
  }
}