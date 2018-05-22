import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component'
import { UsersService } from '../users.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [UsersService]
})
export class LoginPageComponent{

	/*@Output() userName = new EventEmitter<string>();*/

	@Output() UserName = new EventEmitter<string>();
    change(increased:any) {
        this.UserName.emit(increased);
    }
/*
 	login(name){
 		if(localStorage.getItem(name) !== null){
 			this.UserName = name;
 			this.userName.emit(name)
 		}
 	}

 	registration(name){
 		if(localStorage.getItem(name) === null){
 			localStorage.setItem(name, '');
 		}
 	}

 	constructor(private usersService: UsersService){}

 	
*/
}
