import { Directive, ElementRef,  Input , OnInit} from '@angular/core';

@Directive({
  selector: '[phone]'
})

export class PhoneDirective {
  @Input('phone') phone: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if(!this.phone) {
      this.el.nativeElement.innerHTML = 'Empty';
      this.el.nativeElement.style = 'font-style: italic; opacity: 0.7;';
     }
  }

}
