import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormAdbuilderService {

  private fb = inject(FormBuilder);


  public formGroup: FormGroup;

  constructor() {
    this.formGroup = this.fb.group({
      assisted: ['true', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      ministry: ['', Validators.required],
      arechristian: ['false', Validators.required],
      church: [''],
      about: ['', Validators.required],
    });
  }

  getForm(): FormGroup {
    return this.formGroup;
  }

  resetForm() {
    this.formGroup.reset();
  }
}
