import { Component, input, output } from '@angular/core';
import { FormStepOneComponent } from "../../organisms/form-step-one/form-step-one.component";
import { FormGroup } from '@angular/forms';
import { ButtonComponent } from '@shared/components/atoms/buttons/button/button.component';
import { FormStepTwoComponent } from "../../organisms/form-step-two/form-step-two.component";
import { FormStepThreeComponent } from '../../organisms/form-step-three/form-step-three.component';

@Component({
  selector: 'template-form-steps',
  imports: [FormStepOneComponent, ButtonComponent, FormStepTwoComponent, FormStepThreeComponent],
  templateUrl: './form-steps.component.html',

})
export class FormStepsComponent {

  stepFrom = input<number>(0);
  nextStep = output<void>();
  backStep = output<void>();
  submit = output<void>();
  form = input.required<FormGroup>();
  formSubmitted = input.required<boolean>();

  constructor() {
    console.log(this.stepFrom());
  }

  onNext() {
    if (this.stepFrom() === 1) {
      this.submit.emit();
    } else {
      this.nextStep.emit();
    }
  }
}
