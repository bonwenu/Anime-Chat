import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = '';
  password:string = '';

  constructor(private authorizor: AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router) { }

  ngOnInit() {
    if(this.authorizor.loggedIn()) {
      this.router.navigate(['home']);
    }
  }

  checkLogin() {

    const user = {
      username: this.username,
      password: this.password
    }

    this.authorizor.authenticatedUser(user).subscribe((data:any) => {
      if(data.jwt) {
        this.authorizor.storeUserData(data.jwt, this.username);
        this.flashMessage.show('You are now logged in!', {
          cssClass: 'alert-success', 
          timeout: 3500});
        this.router.navigate(['home']);
      }
      else{
        this.flashMessage.show("Incorrect credentials", {
          cssClass: 'alert-danger', 
          timeout: 3000});
          this.username = "";
          this.password = ""
      }

    });
  }

}
