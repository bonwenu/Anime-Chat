import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import io from 'socket.io-client';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  socket: any;
  isHidden: boolean = false;
  @ViewChild('messageForm', {static: false}) messageForm: ElementRef;
  @ViewChild('message', {static: false}) public message: ElementRef;
  @ViewChild('chat', {static: false}) chat: ElementRef;
  @ViewChild('messageArea', {static: false}) messageArea: ElementRef;
  @ViewChild('userFormArea', {static: false}) userFormArea: ElementRef;
  @ViewChild('userForm', {static: false}) userForm: ElementRef;
  @ViewChild('users', {static: false}) users: ElementRef;
  @ViewChild('username', {static: false}) username: ElementRef;
  

  

  constructor() { }

  ngAfterViewInit() {

    this.socket.on("new message", (data) => {
      this.chat.nativeElement.innerHTML += ('<div class = "well"><strong>'+data.user+'</strong>: '+data.msg+'</div>');
    });

  this.socket.on("get users", (data) => {
      var html ="";
      for(let i = 0; i < data.length; i++) {
          html += '<li class ="list-group-item">'+data[i]+'</li>';
      }
      this.users.nativeElement.innerHTML = html;
      
  });

    
  }

  ngOnInit() {
    this.socket =  io("http://localhost:5000");
  }

  sendMessage() {
    this.socket.emit("send message", this.message.nativeElement.value);
    this.message.nativeElement.value ='';
  }

  submitUser() {
    this.socket.emit("new user", this.username.nativeElement.value, (data) => {
      if(data) {
          this.isHidden = true;
      }
  });
  this.username.nativeElement.value='';
  }

}
