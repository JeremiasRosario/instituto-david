import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'atom-button',
  imports: [ButtonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {

  label = input.required<string>();
  icon = input<string>();
  raised = input<boolean>(true);
  clicked = output<void>();
  severity = input<'success' | 'secondary' | 'danger' | 'help' | 'info'>('secondary');


  handleClick() {
    this.clicked.emit();
  }

}
