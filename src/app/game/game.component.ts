import {Component, OnInit} from '@angular/core';
import {API_GAME_DOWNLOAD} from "../configs/apis_urls";
import {AuthService} from "../services/auth/auth.service";


@Component({
    selector: 'game',
    templateUrl: 'game.component.html',
})
export class GameComponent implements OnInit{

    constructor(public authService:AuthService){
    }

    ngOnInit(){

    }

}
