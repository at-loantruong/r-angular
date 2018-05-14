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
    if(!this.el.nativeElement.getAttribute('src')) {
      this.el.nativeElement.setAttribute('src', '../assets/images/anonymous.png');
    }
  }

}
