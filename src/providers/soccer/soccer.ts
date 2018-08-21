import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Injectable()
export class SoccerProvider {
  private baseApiPath = "https://pyasui-com.umbler.net/soccer-api/"
  constructor(public http: Http) {
   // console.log('Hello SoccerProvider Provider');
  }

  getSoccer(){
   return this.http.get(this.baseApiPath + "api/soccer/getlist");
  }

  getNewSoccerId(id){
    return this.http.get(this.baseApiPath + `api/soccer/getitem?id=${id}`)
   }

  
}