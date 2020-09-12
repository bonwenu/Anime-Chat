import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import io from 'socket.io-client';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  socket: any;
  
  @ViewChild('userList', {static: false}) userList: ElementRef;
  @ViewChild('roomName', {static: false}) roomName: ElementRef;
  @ViewChild('username', {static: false}) username: ElementRef;
  @ViewChild('chatForm', {static: false}) chatForm: ElementRef;
  @ViewChild('msg', {static: false}) msg: ElementRef;
  @ViewChild('chatMessages', {static: false}) chatMessages: ElementRef;
  
  user: string;
  room: string;

  constructor(private router: Router, private renderer:Renderer2) { 
    
  }

  ngOnInit() {
    this.socket =  io("http://localhost:5000");
    this.room = sessionStorage.getItem('room');
    this.user = sessionStorage.getItem('username');
    
    if(!this.room) {
      this.router.navigate(['home']);
    }
    
  }

  ngAfterViewInit() {

    // Join chat room
    this.socket.emit('joinRoom', {username:this.user, room:this.room});
    
    // Get room and users
    this.socket.on('roomUsers', ({room, users}) => {
      this.outputRoomName(room);
      this.outputUsers(users);
    });

    // Message from server
    this.socket.on('message', (message) => {
      console.log(message);
      this.outputMessage(message);

      // Scroll down
      this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
    });
    
    this.chatForm.nativeElement.addEventListener('submit', (event) => {
      event.preventDefault();

      // Get message text
      let msg = this.msg.nativeElement.value;
      msg = msg.trim();
  
      if (!msg){
        return false;
      }
      // Emit message to server
      this.socket.emit('chatMessage', msg);

      // Clear input
      this.msg.nativeElement.value ="";
      this.msg.nativeElement.focus();
    });
  
  }
  
  // Output message to DOM
  outputMessage(message) {
    const div= this.renderer.createElement('div');
    div.classList.add('message');

    const p= this.renderer.createElement('p');
    p.classList.add('meta');
    p.innerText = message.username;
    p.innerHTML += `<span> ${message.time}</span>`;
    div.appendChild(p);

    const para= this.renderer.createElement('p');
    div.classList.add('text');
    para.innerText = message.text;
    div.appendChild(para);
    
    this.chatMessages.nativeElement.appendChild(div);
  }

  // Add room name to DOM
  outputRoomName(room) {
    this.roomName.nativeElement.innerText= room;
  }

  // Add users to DOM
  outputUsers(users) {
    this.userList.nativeElement.innerHTML = '';

    users.forEach(user=>{
      const li = this.renderer.createElement('li');
      li.innerText = user.username;
      console.log(user.name)
      this.userList.nativeElement.appendChild(li);
    });
  }

  // Lets others in room know that user has left
  leaveRoom() {
    this.socket.emit('leave');
    this.router.navigate(['home']);
  }

}
