import { Component } from '@angular/core';
import {API_GAME_DOWNLOAD} from "../configs/apis_urls";

@Component({
    selector: 'game',
    templateUrl: '../templates/game.component.html',
})
export class GameComponent {

    //gamelink:string = API_GAME_DOWNLOAD+"index.html";
    gamelink:string = "http://files.mael-gaonach.fr/test.html";

}
