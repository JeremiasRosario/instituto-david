import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormAdbuilderService {

  private fb = inject(FormBuilder);

  constructor() { }

  buildForm(): FormGroup {

    return this.fb.group({
      assisted: [false, Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      ministry: ['', Validators.required],
      arechristian: [false, Validators.required],
      church: ['', Validators.required],
      about: ['', Validators.required],
    });
  }


}
