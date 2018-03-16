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
        return (this.wins/this.losses).toFixed(2);
    }

}