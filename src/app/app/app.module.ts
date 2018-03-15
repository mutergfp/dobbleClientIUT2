import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "../routing/app-routing.module";
import {GameComponent} from "../game/game.component";
import {HttpClientModule} from "@angular/common/http" ;
import {LoginComponent} from "../login/login.component";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../services/auth/auth.service";
import {MenuComponent} from "../menu/menu.component";
import {ImagesComponent} from "../images/images.component";
import {RegisterComponent} from "../register/register.component";
import { ImagesService } from '../services/images/images.service';
import {MessagesComponent} from "../messages/messages.component";
import { MessageService } from '../services/message/message.service';
import {ProfileComponent} from "../profile/profile.component";
import { PlayerService } from '../services/player/player.service';
import {LeaderboardComponent} from "../leaderboard/leaderboard.component";


@NgModule({
  declarations: [
      AppComponent,
      GameComponent,
      LoginComponent,
      RegisterComponent,
      MenuComponent,
      ImagesComponent,
      MessagesComponent,
      ProfileComponent,
      LeaderboardComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [AuthService, ImagesService, MessageService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
