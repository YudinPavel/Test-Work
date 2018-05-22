import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreatePageComponent } from './create-page/create-page.component'
import { RouterModule } from '@angular/router';


const routes = [
  /*{path: '', component: LoginPageComponent},*/
  {path: '', component: HomePageComponent},
  {path: 'info', component: CreatePageComponent}
];


@NgModule({
  declarations: [
  	SearchPipe,
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    CreatePageComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
