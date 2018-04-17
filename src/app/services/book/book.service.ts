import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class BookService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  getAllBooks() {
    var headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.cookies.get('vinothToken') })//getting the token with name(key) vinoth and value(token)
    return this.http.get('http://localhost:9000/books/', { headers: headers })// passing token in the headers
  }

  getBookById(id) {
    var headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.cookies.get('vinothToken') })//getting the token with name(key) vinoth and value(token)
    return this.http.get('http://localhost:9000/books/' + id, { headers: headers })// passing token in the headers
  }

  updateBookById(id, data) {
    var headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.cookies.get('vinothToken') })//getting the token with name(key) vinoth and value(token)
    return this.http.put('http://localhost:9000/books/' + id, data, { headers: headers })// passing token in the headers
  }

  createBook(data) {
    var headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.cookies.get('vinothToken') })//getting the token with name(key) vinoth and value(token)
    return this.http.post('http://localhost:9000/books/', data, { headers: headers })// passing token in the headers
  }

  removeBookById(id) {
    var headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.cookies.get('vinothToken') })//getting the token with name(key) vinoth and value(token)
    return this.http.delete('http://localhost:9000/books/' + id, { headers: headers })// passing token in the headers
  }



}
