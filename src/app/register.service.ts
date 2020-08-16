import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly rootUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  insertUser(userName: string, password: string, firstName: string, lastName: string, email: string, phone: number, address: string, pancard: string) {
    var body = {
      username: userName,
      password: password, 
      fname : firstName,
      lname : lastName,
      email : email,
      phone : phone,
      address : address,
      pan : pancard
    }
    return this.http.post(this.rootUrl + '/register', body);
  }
}
