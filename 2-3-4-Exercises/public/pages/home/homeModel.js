import {Observable, QueryRouter} from '/js/src/index.js';

export default class homeModel extends Observable {
  constructor() {
    super();
    this._userName = "NOT init";
  }

  get userName(){
    return this._userName
  }

 set userName(userName) {
    this._userName=userName
    this.notify()
  }

}