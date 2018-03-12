

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home.component";
import {GameComponent} from "./components/game.component";


const routes:Routes =[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'game',component:GameComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}