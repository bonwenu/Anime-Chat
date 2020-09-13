import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from 'src/app/services/validate.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  email: string;

  constructor(private validator:ValidateService, 
    private flashMessage: FlashMessagesService, 
    private authorizor: AuthService,
    private router:Router) { }

  ngOnInit() {
  }

  register() {

    const user = {
      username: this.username,
      password: this.password,
      email: this.email,
    };

    // Required fields
    if(!this.validator.validateRegister(user)){
      this.flashMessage.show("Please fill in all fields.", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Password format
    if(!this.validator.validateNewPAssword(user.password)) {
      this.flashMessage.show("At least one number\nOne lowercase and one uppercase letter\nAt least six characters", {cssClass: 'alert-danger', timeout: 3000});
      this.password = undefined;
      return false;
    }

    // Validate email
    if(!this.validator.validateEmail(user.email)) {
      this.flashMessage.show("Please use a valid email.", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    // Clear fields if successful
    this.email = undefined;
    this.username = undefined;
    this.password = undefined;

    // Register user
    this.authorizor.registerUser(user).subscribe((data:any) => {
      if(data.success) {
        this.flashMessage.show("You are now registered and can log in.", {cssClass: 'alert-success', timeout: 3000});
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 3000);
        
      }
      else {
        this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

}
