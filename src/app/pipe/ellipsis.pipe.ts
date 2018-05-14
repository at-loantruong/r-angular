import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'ellipsis'
})

export class EllipsisPipe implements PipeTransform{
	transform(content, args) {
	if (args === undefined) {
		return content;
	}
	if (content.length > args) {
		return content.substring(0, args) + '...';
	} else {
		return content;
		}
	}

}
