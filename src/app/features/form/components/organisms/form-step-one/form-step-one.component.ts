import { Component, input } from '@angular/core';
import { InputFormComponent } from "@shared/components/atoms/input/input-form/input-form.component";
import { TextAreaComponent } from '@shared/components/atoms/text-area/text-area-form/text-area-form.component';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'organisms-form-step-one',
  imports: [InputFormComponent, TextAreaComponent],
  templateUrl: './form-step-one.component.html',
})

export class FormStepOneComponent {
  form = input.required<FormGroup>();
  formSubmitted = input.required<boolean>();
}
