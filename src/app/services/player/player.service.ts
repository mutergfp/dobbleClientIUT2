import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Player} from "./player";

@Injectable()
export class PlayerService {

  players:Player[] = [];

  constructor() {
    this.refresh();
  }

  public refresh(){
    PlayerService.getPlayersList().subscribe(res =>{
      let players:Player[] = [];
      for(let p of res){
        players.push(new Player(p.username,p.wins,p.losses));
      }
      this.players=players;
    });
  }

  private static getPlayersList():Observable<Player[]>{
    return Observable.of([{username:"420 Blaze me",wins:57,losses:4},{username:"XXXDarkLucHacker",wins:27,losses:20},{username:"TerraxX",wins:54,losses:2},{username:"Joypok",wins:4,losses:42}]).delay(3000);
  }

  public getPlayer(username:string):Player{
    for(let p of this.players){
      if(p.username==username){
        return p;
      }
    }
    return undefined;
  }

  public getPlayersOrderedByWins(){
    let ordered = this.players;
    return ordered.sort( (a, b) => {
      return b.wins - a.wins;
    });
  }

  public getPlayersOrderedByRatio(){
    let ordered = this.players;
    return ordered.sort( (a, b) => {
      return b.ratio - a.ratio;
    });
  }

  public getPlayersOrderedByLosses(){
    let ordered = this.players;
    return ordered.sort( (a, b) => {
      return b.losses - a.losses;
    });
  }

}
