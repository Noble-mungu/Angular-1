import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

 @Input()testName: string;

  numberOfLikes : number = 0;
  numberOfDislikes :number =0;

  likeButtonClick(){
  	this.numberOfLikes++;

  }

  dislikeButtonClick(){
  	this.numberOfDislikes++;

  }
}
