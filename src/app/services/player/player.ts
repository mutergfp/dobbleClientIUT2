export class Player{

    id:string;

    username:string;

    wins:number;

    losses:number;

    scores:number[];

    clicksCorrects:number;

    clicksIncorrects:number;

    public constructor(id:string,username:string){
        this.username=username;
        this.id = id;
        this.wins=0;
        this.losses=0;
        this.scores=[];
        this.clicksCorrects=0;
        this.clicksIncorrects=0;
    }

    get ratio():number{
        if(this.losses==0){return this.wins}
        return +(this.wins/this.losses).toFixed(3);
    }

    get meanScore():number{
        if(this.scores.length == 0){
            return 0;
        }else{
            let sum = 0;
            for(let i = 0 ; i<this.scores.length ; i++){
                sum+=this.scores[i];
            }
            return +(sum/this.scores.length).toFixed(1);
        }
    }

    get clickPercent():number{
        if(this.clicksIncorrects==0){return 100}
        return +(100*this.clicksCorrects/(this.clicksIncorrects+this.clicksCorrects)).toFixed(3);
    }

    get bestScore():number{
        if(this.scores.length == 0){
            return 0;
        }else{
            let max = 0;
            for(let i = 0 ; i<this.scores.length ; i++){
                if(this.scores[i]>max){
                    max = this.scores[i];
                }
            }
            return max;
        }
    }
}