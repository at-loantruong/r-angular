import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  @Input() post: any;

  constructor() {
    console.log(this.post);
  }
}