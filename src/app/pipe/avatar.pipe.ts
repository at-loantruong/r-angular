import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'avatar'
})

export class AvatarPipe implements PipeTransform{
	transform(image : string) {
  console.log(image);

	if (!image) {
		return '../assets/images/anonymous.png';
	} else {
		return image;
		}
	}

}
