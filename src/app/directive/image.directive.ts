import { Directive, ElementRef,  Input , OnInit} from '@angular/core';

@Directive({
  selector: '[URLImage]'
})

export class ImageDirective implements OnInit {
  @Input() URLImage: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if(!this.URLImage) {
     this.el.nativeElement.src = "../assets/images/anonymous.png";
   }
  }

}
