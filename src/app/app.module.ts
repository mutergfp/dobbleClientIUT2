import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import {AppRoutingModule} from "./app-routing.module";
import {GameComponent} from "./components/game.component";
import {HomeComponent} from "./components/home.component";


@NgModule({
  declarations: [
      AppComponent,
      GameComponent,
      HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
