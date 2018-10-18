import { Directive, ElementRef,  Renderer2,  Input , OnInit } from '@angular/core';

@Directive({
  selector: '[position]'
})

export class PositionDirective implements OnInit {
  @Input() position: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    switch (this.el.nativeElement.innerHTML) {
      case 'SSE' :
        return this.renderer.addClass(this.el.nativeElement, 'violet');
      case 'SE' :
        return this.renderer.addClass(this.el.nativeElement, 'blue');
      case 'ASE' :
        return this.renderer.addClass(this.el.nativeElement, 'none');
      case 'Intern' :
        return this.renderer.addClass(this.el.nativeElement, 'yellow');
      default :
       return this.renderer.addClass(this.el.nativeElement, 'gold');
    }
  }

}
