import { Component, inject, signal } from '@angular/core';
import { FormAdbuilderService } from '../../features/form/services/form.service';
import { StepsComponent } from '@shared/components/molecules/steps/steps.component';
import { FormStepsComponent } from '../../features/form/components/templates/form-steps/form-steps.component';
import { FormGroup } from '@angular/forms';
import { PresentFormComponent } from 'src/app/features/form/components/templates/present-form/present-form.component';


@Component({
  selector: 'form-page',
  imports: [StepsComponent, FormStepsComponent, PresentFormComponent],
  templateUrl: './form-page.component.html',
})
export class FormPageComponent {

  private readonly formService = inject(FormAdbuilderService);

  private readonly _formGroup = this.formService.getForm();

  formErrors = signal<any>({});
  formSubmitted = signal<boolean>(false);
  stepForm = signal<number>(0);

  get formGroup(): FormGroup {
    return this._formGroup;
  }

  get stepsValid(): boolean[] {
    // Step 1: campos principales
    const fg = this.formGroup;
    const step1Valid = fg.get('name')?.valid && fg.get('lastName')?.valid && fg.get('email')?.valid && fg.get('phone')?.valid && fg.get('ministry')?.valid;
    // Step 2: campos secundarios
    const step2Valid = fg.get('address')?.valid && fg.get('city')?.valid && fg.get('arechristian')?.valid && fg.get('church')?.valid && fg.get('about')?.valid;
    // Step 3: solo se habilita si todo el form es válido
    const step3Valid = fg.valid;
    return [!!step1Valid, !!step2Valid, !!step3Valid];
  }

  handleNextStep() {
    if (this.stepForm() < 2) {
      this.stepForm.update((prev) => prev + 1);
    }
  }

  handleBackStep() {
    if (this.stepForm() > 0) {
      this.stepForm.update((prev) => prev - 1);
    }
  }

  handleStepChange(index: number) {
    this.stepForm.set(index);
  }

  onSubmit() {
    this.formSubmitted.set(true);
    this.formErrors.set(this._formGroup.errors);
    console.log(this._formGroup.errors);
    if (this._formGroup.valid) {
      this.formSubmitted.set(false);
      this.formErrors.set({});
      console.log(this._formGroup.value);
    }
  }

  handleSubmit() {
    this.onSubmit();
    if (this._formGroup.valid) {
      this.stepForm.set(2);
    }
  }

}
