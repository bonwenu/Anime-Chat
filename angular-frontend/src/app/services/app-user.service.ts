import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppUserService {
  authToken: any;
  // url:string = 'http://localhost:8083';
  url:string = 'http://18.221.171.201:8083';

  constructor(private http: HttpClient) { }

  getProfile(username) {

    this.loadToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + this.authToken
    });
    return this.http.get(this.url + '/users/' + username, {headers: headers});
  }

  upDatePassword(user){
    this.loadToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + this.authToken
    });
    return this.http.put(this.url + '/users/' + user.username, user, {headers: headers});
  }

  loadToken() { 
    const token = sessionStorage.getItem('id_token');
    this.authToken = token;
  }
}
