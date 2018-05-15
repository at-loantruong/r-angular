import { Directive, ElementRef, Renderer2, Input , OnInit } from '@angular/core';

@Directive({
  selector: '[phone]'
})

export class PhoneDirective {
  @Input('phone') phone: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if (!this.el.nativeElement.innerHTML) {
      this.el.nativeElement.innerHTML = 'Empty';
      this.renderer.addClass(this.el.nativeElement, 'empty');
     }
  }

}
