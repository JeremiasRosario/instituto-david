import { Component, input, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Options } from '@interfaces/form.interfaces';
import { RadioFormComponent } from '@shared/components/atoms/radio-button/radio-form/radio-form.component';

@Component({
  selector: 'organisms-form-step-two',
  imports: [RadioFormComponent],
  templateUrl: './form-step-two.component.html',
})
export class FormStepTwoComponent {
  formSubmitted = input.required<boolean>();
  form = input.required<FormGroup>();
  optionsCris = signal<Options[]>([
    { name: 'No', key: 'true' },
    { name: 'Si', key: 'false' },
  ])
  optionsAsist = signal<Options[]>([
    { name: 'No', key: 'true' },
    { name: 'Si', key: 'false' },
  ])
}
