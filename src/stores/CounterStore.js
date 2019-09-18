import { observable, action } from 'mobx';

export default class CounterStore {
  @observable counter = 1;

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