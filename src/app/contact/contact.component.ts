import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message = "this is a message";

sendMessage() {
	this.message = "your message was sent!";
}

updateText(){
	console.log("This is an update");
}
}
