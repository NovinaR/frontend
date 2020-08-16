import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  readonly rootUrl = '';

  constructor(private http: HttpClient) { }

  insertRequest(accNo: string,pages:string) {
    var body = {
      accNo: accNo,
      pages: pages, 
    }
    return this.http.post(this.rootUrl + 'request', body);
  }
}
