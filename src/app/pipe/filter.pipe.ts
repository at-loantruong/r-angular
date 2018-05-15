import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], conditions: string, code: string) {
    return items.filter(item => {
      if(item.position === conditions && item.code !== code) {
        return true;
      }
    });
  }
}
