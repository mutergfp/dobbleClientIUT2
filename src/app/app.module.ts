import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import {AppRoutingModule} from "./app-routing.module";
import {GameComponent} from "./components/game.component";
import {HttpClientModule} from "@angular/common/http" ;
import {LoginComponent} from "./components/login.component";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {MenuComponent} from "./components/menu.component";
import {ImagesComponent} from "./components/images.component";


@NgModule({
  declarations: [
      AppComponent,
      GameComponent,
      LoginComponent,
      MenuComponent,
      ImagesComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
