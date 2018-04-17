import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  createUser(data) {
    var headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.cookies.get('vinothToken') })// passing token in the headers
    return this.http.post('http://localhost:9000/users/', data ,{ headers: headers })
  }

  getAllUsers() {
    var headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.cookies.get('vinothToken') })// passing token in the headers
    return this.http.get('http://localhost:9000/users/', { headers: headers })
  }

}
