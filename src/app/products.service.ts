import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "./new-times/product.model";
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { FIREBASE_OPTIONS } from "@angular/fire/compat";

@Injectable(
    {providedIn:'root'}
)
export class ProductsService {
   // private baseUrl:string = "https://speedrun-app-ce1b6-default-rtdb.firebaseio.com/"

   // private productsEndPoint:string = "game-info.json";


constructor(private db: AngularFireDatabase){

}

getProducts(){
return this.db.list<ProductModel>("game-info").valueChanges();
}

getProduct(index:number){
   
}

addGame(game: ProductModel){
    this.db.list<ProductModel>("game-info").push(game);
}

}