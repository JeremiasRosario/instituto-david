import { Component, input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ReactiveFormsModule } from '@angular/forms';
import { Options } from '@interfaces/form.interfaces';

@Component({
  selector: 'atom-radio-form',
  standalone: true,
  imports: [RadioButton, FormsModule, MessageModule, ReactiveFormsModule],
  templateUrl: './radio-form.component.html',
})
export class RadioFormComponent {
  label = input.required<string>();
  options = input.required<Options[]>();
  formGroup = input<FormGroup | undefined>(undefined, { alias: 'formGroup' });
  formControlName = input<string | undefined>(undefined, { alias: 'formControlName' });
  formSubmitted = input(false, { alias: 'formSubmitted' });

  get control(): FormControl | null {
    if (this.formGroup() && this.formControlName()) {
      return this.formGroup()!.get(this.formControlName()!) as FormControl;
    }
    return null;
  }

  get showError(): boolean {
    const ctrl = this.control;
    return !!ctrl && ctrl.invalid && (ctrl.touched || this.formSubmitted());
  }

  handleRadioChange(value: string) {
    if (this.control) {
      this.control.setValue(value);
      this.control.markAsDirty();
      this.control.markAsTouched();
    }
  }
}
