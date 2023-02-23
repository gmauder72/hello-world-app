export class ProductModel {
    gameTitle: string;
    img: string;
    imgDescription: string;
    runCategory: string;
    runPlace: string;
    runTime: string;
    username: string;
    daySubmitted:string;

    constructor(gameTitle: string, img: string, imgDescription: string, runCategory: string, runPlace: string, runTime: string, username: string, daySubmitted: string){
        this.gameTitle = gameTitle;
        this.img =img;
        this.imgDescription = imgDescription;
        this.runCategory= runCategory;
        this.runPlace = runPlace;
        this.runTime = runTime;
        this.username = username;
        this.daySubmitted = daySubmitted;
    }
}