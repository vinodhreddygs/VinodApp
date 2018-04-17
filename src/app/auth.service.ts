import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  masterKey = 'TRRMQxjOAKvTI4gAsE9IbKeNSVsFcwSI';
  constructor(private http: HttpClient, private cookies: CookieService) { }

  //converting into base 64 string and passing through a headers to prevent seeing on the browser
  //whenever we login, we will get the jwt token
  login(data) {
    let headers = new HttpHeaders({ 'Authorization': "Basic " + btoa(data.email + ":" + data.password) });
    return this.http.post('http://localhost:9000/auth/', { access_token: this.masterKey }, { headers: headers })
      .map((response: Response) => {
        console.log("Response", response);
        if (response && response['token']) {
          console.log("Token from response", response['token'])
          this.cookies.set('vinothToken', response['token']); //creating cookie in browser(i.e.Application) with name and value(i.e.token)
        }
      })
      .catch((error) => Observable.throw(error));
  }

  logout(){
    this.cookies.delete('vinothToken'); //to clear cookie
  }

}
