import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../shared/components/organisms/header/header.component";

@Component({
  selector: 'form-layout',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './form-layout.component.html',
})
export class FormLayoutComponent {



}
