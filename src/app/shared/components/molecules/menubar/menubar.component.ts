import { Component, input } from '@angular/core';
// import { Menubar } from 'primeng/menubar';
import { ImageComponent } from '../../atoms/image/image.component';

@Component({
  selector: 'molecules-menu-bar',
  imports: [ImageComponent],
  templateUrl: './menubar.component.html',
})
export class MenubarComponent {
  imageSrc = input.required<string>();
}
