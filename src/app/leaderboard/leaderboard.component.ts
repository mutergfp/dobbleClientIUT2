import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../services/player/player.service";
import {Player} from "../services/player/player";




@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

    readonly WINS:string = "WINS";
    readonly MEANSCORE:string = "LOSSES";
    readonly RATIO:string = "RATIO";

    sortMethod:string;

    sortInverted:boolean;

    constructor(public playerService:PlayerService) { }

    ngOnInit() {
        this.playerService.refresh();
        this.sortMethod=this.RATIO;
        this.sortInverted=false;
    }

    get players(){

        let res:Player[] = [];

        switch (this.sortMethod){
            case this.WINS :
                res = this.playerService.getPlayersOrderedByWins();
                break;
            case this.MEANSCORE:
                res = this.playerService.getPlayersOrderedByMeanScore();
                break;
            default:
                res = this.playerService.getPlayersOrderedByRatio();
                break
        }

        if(this.sortInverted){
            res = res.reverse();
        }
        return res
    }

    setSortMethod(method:string){
        if(this.sortMethod == method){
            this.sortInverted = !this.sortInverted;
        }else{
            this.sortMethod = method;
            this.sortInverted = false;
        }
    }

    getRank(player:Player){
        if(this.sortInverted){
            return this.players.length-this.players.indexOf(player);
        }else{
            return this.players.indexOf(player)+1;
        }
    }
}
