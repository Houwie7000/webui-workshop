import {Observable, QueryRouter} from '/js/src/index.js';

export default class homeModel extends Observable {
  constructor() {
    super();
    this._userName = "NOT init";
    this._data = RemoteData.notAsked();
  }

  get userName(){
    return this._userName
  }

 set userName(userName) {
    this._userName=userName
    this.notify()
  }

  get data(){
    return this._data
  }

  set data(data){
    this._data=data
  }

  async retrieveInformation(name){
    this.data = RemoteData.loading();
    const {ok, response} = await this.model.loader.get(`/info/info/${name}`)
    if (ok) {
      this.data = RemoteData.Succes(response); 
    } else {
      this.data = "No data found"
    }
    this.notify();
  }

}