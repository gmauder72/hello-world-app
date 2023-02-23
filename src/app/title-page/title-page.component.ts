import { Component } from '@angular/core';
import { ProductModel } from '../new-times/product.model';
import { mock_list } from '../new-times/mock-list';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent {
  products : ProductModel [] = [];
constructor(){
  for(var item of mock_list){
    console.log(item);
    this.products.push(item);
  }
}

}
