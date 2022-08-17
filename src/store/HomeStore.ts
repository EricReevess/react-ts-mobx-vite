import { makeAutoObservable, observable, action, reaction, autorun, when, IReactionDisposer } from 'mobx';

class HomeStore {
  @observable count = 0;
  logCount: IReactionDisposer;

  constructor() {
    makeAutoObservable(this);

    this.logCount = autorun(() => { console.log('count:', this.count); });
    reaction(() => this.count, (count) => {
      if (count > 10) {
        this.count = 0;
      }
    });

    when(() => this.count === 10, () => {
      this.logCount();
    });
  }

  @action
  incCount = () => {
    this.count += 1;
  };

}

export default new HomeStore();