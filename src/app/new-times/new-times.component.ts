import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-times',
  templateUrl: './new-times.component.html',
  styleUrls: ['./new-times.component.css']
})
export class NewTimesComponent implements OnInit {
 @Input() gameTitle: string;
 @Input() imgDescription: string;
 @Input() runCategory: string;
 @Input() img: string;
 @Input() runPlace: string;
 @Input() runTime: string;
 @Input() username: string;
 @Input() daySubmitted:string;

 constructor(){
        this.gameTitle = "No title found";
        this.img = "No img found";
        this.imgDescription = "No description found";
        this.runCategory= "No category found";
        this.runPlace = "No place found";
        this.runTime = "No time found";
        this.username = "No user found";
        this.daySubmitted = "No day found";
 }
 ngOnInit(): void {
}
}
