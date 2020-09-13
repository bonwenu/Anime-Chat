import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  // url:string = 'http://localhost:8083';
  url:string = 'http://18.221.171.201:8083';

  constructor(private http: HttpClient) { }

  registerUser(user) {
    let headers = new HttpHeaders({ 
      'Content-Type': 'application/json'
    }); 

    return this.http.post(this.url + '/users/register', user, {headers: headers});
  }

  authenticatedUser(user) {
    let headers = new HttpHeaders({ 
      'Content-Type': 'application/json'
    }); 

    return this.http.post(this.url + '/authenticate', user, {headers: headers } );
  }

  // Stroe user info after successful login
  storeUserData(token, username) {
    sessionStorage.setItem('id_token', token);
    sessionStorage.setItem('username', username);
    this.authToken = token;
  }

  logout() {
    this.authToken = null;
    sessionStorage.removeItem('id_token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('room');
  }

  loggedIn() {
    // For local session
    //return tokenNotExpired('id_token');
    let user = sessionStorage.getItem('id_token');
    return !(user === null)
  }
  
  loadToken() { 
    const token = sessionStorage.getItem('id_token');
    this.authToken = token;
  }
}
