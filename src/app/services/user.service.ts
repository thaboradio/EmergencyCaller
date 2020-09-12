import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = 'http://localhost:59511/';
  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post(this.baseUrl + 'api/Users', user);
  }
}
