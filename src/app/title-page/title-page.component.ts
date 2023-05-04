import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ProductModel } from '../new-times/product.model';
import { Subscription } from "rxjs"
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent implements OnInit{
  products : ProductModel [] = [];
  public user!: Subscription;
  public isAuthenticated:boolean = false;
public constructor(private productsService:ProductsService){
  
}

ngOnInit(): void{

  

  this.productsService.getProducts().subscribe((data:ProductModel []) =>{
    console.log("Fetching products");
    for(var product of data){
      console.log(product);
      this.products.push(product);
    }
  })
  

}
}
