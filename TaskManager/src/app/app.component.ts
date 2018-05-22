import { Component } from '@angular/core';
import { EventsService } from './events.service'

import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [EventsService, UsersService]
})
export class AppComponent {
}
