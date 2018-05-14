
import { Pipe, PipeTransform, ElementRef } from '@angular/core';

@Pipe({
 name: 'position'
})
export class PositionPipe implements PipeTransform {

  constructor () { }

  transform(position: string) {
   switch(position) {
    case 'SSE' :
      return 'violet'
    case 'SE' :
      return 'blue'
    case 'ASE' :
      return 'none';
    case 'Intern' :
      return 'yellow'
    default :
     return 'gold'
    }
  }

}
