import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  constructor() { }


  rsvp = {
    name: '',
    email: '',
    attendance: ''
  };

  ngOnInit(): void {
  }

  submitRsvp() {

  }

}
