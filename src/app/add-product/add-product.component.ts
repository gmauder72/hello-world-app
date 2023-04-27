import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../new-times/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:ProductsService) { }

  ngOnInit(): void {
    
  }

  addGame(game:ProductModel){
    console.log("You clicked add game");
    console.log(game);
    this.ps.addGame(game);

  }
}
