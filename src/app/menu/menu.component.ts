import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {componentRefresh} from "@angular/core/src/render3/instructions";

@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

    public username:string;

    constructor(public authService:AuthService){
    }

    ngOnInit(){
    }

    logout(){
        this.authService.logout();
    }
}
