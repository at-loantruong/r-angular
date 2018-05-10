import { Component } from '@angular/core';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {
  appList: any[] = [ {
      "id": "1",
      "title": "Coffee sugar, chicory seasonal espresso barista americano",
      "src": '../assets/images/image-1.png',
      "content": 'Arista, percolator, cream, aromatic, fair trade, breve body instant lungo blue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic.'
   },
   {
      "id": "2",
      "title": "Wherever far wow thus a squirrel raccoon jeez jaguar this from along",
      "src": '../assets/images/image-2.png',
      "content": 'Arista, percolator, cream, aromatic, fair trade, breve body instant lungo blue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic.'
   } ];

 selectedPost = {};
 isSelected = false;

 onClick(lst){
   this.selectedPost = lst;
   this.isSelected = true;
   console.log(lst);
 }
}