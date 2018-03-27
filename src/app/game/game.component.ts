import {Component, OnInit} from '@angular/core';
import {API_GAME_DOWNLOAD} from "../configs/apis_urls";
import {AuthService} from "../services/auth/auth.service";

let require:any;

@Component({
    selector: 'game',
    templateUrl: 'game.component.html',
})
export class GameComponent implements OnInit{

    youmustlogin:any = require('YouMustLogin.png');

    constructor(public authService:AuthService){
    }

    ngOnInit(){

    }

}
