import { Directive, ElementRef,  Input , OnInit} from '@angular/core';

@Directive({
  selector: '[phone]'
})

export class PhoneDirective implements OnInit {
  @Input() phone: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

}
