import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class leaderboardComponent implements OnInit {
  @Input() rank: string;
  @Input() username: string;
  @Input() inGame: string;
  @Input() realTime: string;
  @Input() date: string;
  
 
  constructor(){
         this.rank = "No title found";
         this.username = "No img found";
         this.inGame = "No description found";
         this.realTime = "No category found";
         this.date = "No place found";
         
  }  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
