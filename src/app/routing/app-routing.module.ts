import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {GameComponent} from "../game/game.component";
import {LoginComponent} from "../login/login.component";
import {ImagesComponent} from "../images/images.component";
import {RegisterComponent} from "../register/register.component";
import {ProfileComponent} from "../profile/profile.component";
import {LeaderboardComponent} from "../leaderboard/leaderboard.component";


const routes:Routes =[
    {path:'',redirectTo:'/game',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'game',component:GameComponent},
    {path:'images',component:ImagesComponent},
    {path:'profile/:username',component:ProfileComponent},
    {path:'leaderboard',component:LeaderboardComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}