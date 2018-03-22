export class Player{

    username:string;

    wins:number;

    losses:number;

    public constructor(username:string, wins:number, losses:number){
        this.username=username;
        this.wins=wins;
        this.losses=losses;
    }

    get ratio():number{
        if(this.losses==0){return this.wins}
        return +(this.wins/this.losses).toFixed(3);
    }

}