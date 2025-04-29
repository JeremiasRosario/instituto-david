import { Component } from '@angular/core';
import { MenubarComponent } from '../../molecules/menubar/menubar.component';

@Component({
  selector: 'organisms-header',
  imports: [MenubarComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent { }
