import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

    readonly rootUrl = '';
  
    constructor(private http: HttpClient) { }
  
    insertEntry( saccount:string,ifscNo:string,raccount:string,amount:number) {
      var body = {
        saccount: saccount,
        ifscNo: ifscNo, 
        raccount:raccount,
        amount:amount
      }
      return this.http.post(this.rootUrl + '/transfer', body);
    }
  }
  