import { Component } from '@angular/core';
import { mock_list } from './leaderboard/mock-list';
import { ProductModel } from './leaderboard/product.model';

@Component({
  selector: 'app-leaderboard-layout',
  templateUrl: './leaderboard-layout.component.html',
  styleUrls: ['./leaderboard-layout.component.css']
})
export class LeaderboardLayoutComponent {
  products : ProductModel [] = [];
  constructor(){
    for(var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }

}
