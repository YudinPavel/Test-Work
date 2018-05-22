import { Component, OnInit, Input } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';

import { EventsService } from '../events.service';
import { UsersService } from '../users.service';

class Event{
  event: string;
  date: string;
  delete: boolean;


  constructor(event: string, date: string){
    this.event = event;
    this.date = date;
    this.delete = false;
  }
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [UsersService, EventsService, LoginPageComponent]
})
export class HomePageComponent{

  name = 'User';
  search = '';
  events;

  constructor(private eventService: EventsService){
    if(localStorage.getItem(this.name) === '' || localStorage.getItem(this.name) === null ){
      this.events = this.eventService.NewEvent;
      localStorage.setItem(this.name, JSON.stringify(this.events));
    }
    else{
      this.events = JSON.parse(localStorage.getItem(this.name));
    }
  }

  UserName(increased:any){
      this.name = increased;
      if(localStorage.getItem(this.name) === '' || localStorage.getItem(this.name) === null ){
      this.events = this.eventService.NewEvent;
      localStorage.setItem(this.name, JSON.stringify(this.events));
    }
    else{
      this.events = JSON.parse(localStorage.getItem(this.name));
    }
  }

  addEvent(event: string, date: string): void {
    if(event == null || event.trim()=="" || date==null || date.trim()=="" ){
      return;
    }

    this.events.push(new Event(event, date));

    localStorage.setItem(this.name, JSON.stringify(this.events));
  }

  deleteEvent(){
    var i = 0;

    for(var i = 0; i < this.events.length; i++){
      if(this.events[i].delete == true){
        this.events.splice(i, 1);
        i--;
      }
    }

    localStorage.setItem(this.name, JSON.stringify(this.events));
  }

  editEvent(event: string, date: string): void{
    if(event == null || event.trim()=="" || date==null || date.trim()=="" ){
      return;
    }

    for(var i = 0; i < this.events.length; i++){
      if(this.events[i].delete == true){
        this.events[i].event = event;
        this.events[i].date = date; 
      }
    }
    
  }

}
