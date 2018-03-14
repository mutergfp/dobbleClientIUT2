

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {GameComponent} from "./components/game.component";
import {LoginComponent} from "./components/login.component";
import {ImagesComponent} from "./components/images.component";


const routes:Routes =[
    {path:'',redirectTo:'/game',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'game',component:GameComponent},
    {path:'images',component:ImagesComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}