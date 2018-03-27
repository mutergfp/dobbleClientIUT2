import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Player} from "./player";
import {HttpClient} from "@angular/common/http";
import {API_USERS_LIST, API_LOGS} from "../../configs/apis_urls";

@Injectable()
export class PlayerService {

  players:Player[] = [];

  constructor(private http: HttpClient) {
    this.refresh();
  }

  public refresh(){
    this.fetchPlayersList().subscribe(res =>{
      let players:Player[] = [];
      for(let p of res){
        let player:Player = new Player(p.username,p.username);
        players.push(player);
        this.fetchPlayerInfos(player);
      }
      this.players=players;
    });
  }

  public getPlayer(username:string):Player{
    for(let p of this.players){
      if(p.username==username){
        return p;
      }
    }
    return undefined;
  }




  //FETCHS HTTP

  private fetchPlayersList():Observable<any>{
    return this.http.get(API_USERS_LIST);
  }

  private fetchPlayerInfos(player:Player):void{
    this.fetchNbWin(player);
    this.fetchNbLosses(player);
    this.fetchScores(player);
    this.fetchClicks(player);
  }

  private fetchNbWin(player:Player):void{
    this.http.get(API_LOGS+"/parties/_count?q=estGagnant:true%20AND%20idJoueur:"+player.id).subscribe(
        (res:{count:number})=>{
          player.wins = res.count;
        }
    )
  }

  private fetchNbLosses(player:Player):void{
    this.http.get(API_LOGS+"/parties/_count?q=estGagnant:false%20AND%20idJoueur:"+player.id).subscribe(
        (res:{count:number})=>{
          player.losses = res.count;
        }
    )
  }

  private fetchScores(player:Player):void{
    this.http.get(API_LOGS+"/parties/_search?q=idJoueur:"+player.id).subscribe(
        (res:{hits:{hits:{_source:{idPartie:string,idJoueur:string,scoreJoueur:number,estGagnant:boolean,timestamp:number}}[]}}) => {
          res.hits.hits.forEach((value)=>{
            player.scores.push(value._source.scoreJoueur);
          });
        }
    )
  }

  private fetchClicks(player:Player):void{
    this.http.get(API_LOGS+"/clics/_count?q=estCorrect:true%20AND%20idJoueur:"+player.id).subscribe(
        (res:{count:number})=>{
          player.clicksCorrects=res.count;
        }
    );
    this.http.get(API_LOGS+"/clics/_count?q=estCorrect:false%20AND%20idJoueur:"+player.id).subscribe(
        (res:{count:number})=>{
          player.clicksIncorrects=res.count;
        }
    );
  }



  //ORDER

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

  public getPlayersOrderedByMeanScore(){
    let ordered = this.players;
    return ordered.sort( (a, b) => {
      return b.meanScore - a.meanScore;
    });
  }

  public getPlayersOrderedByClickPercent(){
    let ordered = this.players;
    return ordered.sort( (a, b) => {
      return b.clickPercent - a.clickPercent;
    });
  }
}
