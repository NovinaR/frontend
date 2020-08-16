import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {


  readonly rootUrl = '';

  constructor(private http: HttpClient) { }

  update(firstName: string, lastName: string, email: string, phone: number, address: string) {
    var body = {
      fname : firstName,
      lname : lastName,
      email : email,
      phone : phone,
      address : address,
    }
    return this.http.post(this.rootUrl + '', body);
  }
}
