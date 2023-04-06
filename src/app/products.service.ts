import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "./new-times/product.model";


@Injectable(
    {providedIn:'root'}
)
export class ProductsService {
    private baseUrl:string = "https://speedrun-app-ce1b6-default-rtdb.firebaseio.com/"

    private productsEndPoint:string = "game-info.json";


constructor(private http:HttpClient){

}

getProducts(){
return this.http.get<ProductModel []>(this.baseUrl + this.productsEndPoint);
}

getProduct(index:number){
    return this.http.get<ProductModel>(this.baseUrl + 'products' + '/' + index + '.json');
}


}