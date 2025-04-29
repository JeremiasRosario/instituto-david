import { Component, input } from '@angular/core';

@Component({
  selector: 'atom-image',
  imports: [],
  templateUrl: './image.component.html',
})
export class ImageComponent {
  imageSrc = input.required<string>();
  imageAlt = input<string>('Image description');
  imageWidth = input<string>('100%');
  imageHeight = input<string>('100%');
  imageClass = input<string>('');
}
