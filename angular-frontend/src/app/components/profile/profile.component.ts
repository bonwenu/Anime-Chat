import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AppUserService } from 'src/app/services/app-user.service';
import { AuthService } from 'src/app/services/auth.service';
import { ValidateService } from 'src/app/services/validate.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  currentPassword: string;
  newPassword: string;
  profileData: any;
  editActive: boolean = false;

  constructor(private authorizor:AuthService,
    private appUserService:AppUserService,
    private flashMessage:FlashMessagesService,
    private validator: ValidateService) { }

  ngOnInit() {
    const username= sessionStorage.getItem('username');
    this.appUserService.getProfile(username).subscribe((data:any) => {
      this.profileData = data;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  edit() {
    this. editActive = true;
  }

  // Change password
  applyChanges() {
    const user = {
      username: this.profileData.username,
      password: this.currentPassword,
      newPassword: this.newPassword
    }
     // Required fields
     if(!this.validator.validatePassword1(user)){
      this.flashMessage.show("Please fill in all fields.", {cssClass: 'alert-danger', timeout: 3000});
      return false;
      }

    // New password format
    if(!this.validator.validateNewPAssword(user.newPassword)) {
      this.flashMessage.show("At least one number\nOne lowercase and one uppercase letter\nAt least six characters", {cssClass: 'alert-danger', timeout: 3000});
      this.currentPassword = undefined;
      this.newPassword = undefined;
      return false;
    }

    // Change Password
    this.appUserService.upDatePassword(user).subscribe((data:any) => {
      console.log("Update: " + data);
      if(data) {
        this.profileData = data;
        this.flashMessage.show("Password successfully changed", {cssClass: 'alert-success', timeout: 3000});
         // Clear fields if successful
        console.log("Password Change successful.");
        this.currentPassword = undefined;
        this.newPassword = undefined;
        this.editActive = false;
      }
      else {
        this.flashMessage.show("Current password did not match our records", {cssClass: 'alert-danger', timeout: 3000});
        this.currentPassword = undefined;
        this.newPassword = undefined;
      }
    },
    err => {
      console.log(err);
      return false;
    });
  }

  cancel() {
    this.currentPassword = undefined;
    this.newPassword = undefined;
    this.editActive = false;
  }

}
