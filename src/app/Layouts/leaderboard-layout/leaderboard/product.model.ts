export class ProductModel {
    rank: string;
    username: string;
    inGame: string;
    realTime: string;
    date: string;


    constructor(rank:string, username:string, inGame:string, realTime:string, date:string){
        this.rank= rank;
        this.username =username;
        this.inGame = inGame;
        this.realTime= realTime;
        this.date = date;
        
    }
}