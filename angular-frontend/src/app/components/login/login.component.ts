import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  selectedOption: String
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.router.navigate(['chat'], { queryParams: { username: this.username, room: this.selectedOption } })
  }

}
