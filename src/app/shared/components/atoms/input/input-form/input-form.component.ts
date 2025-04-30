import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'atom-input-form',
  standalone: true,
  imports: [IftaLabelModule, InputTextModule, CommonModule, MessageModule, TooltipModule],
  templateUrl: './input-form.component.html',
})
export class InputFormComponent {
  placeholder = input('', { alias: 'placeholder' });
  type = input('text', { alias: 'type' });
  labelFor = input('', { alias: 'labelfor' });
  id = input('', { alias: 'id' });
  label = input('', { alias: 'label' });

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

  getTooltipMessage(): string {
    const ctrl = this.control;
    if (!ctrl || !ctrl.errors) return '';
    if (ctrl.errors['required']) return 'Este campo es obligatorio.';
    if (ctrl.errors['email']) return 'Correo electrónico inválido.';
    if (ctrl.errors['minlength']) return `Debe tener al menos ${ctrl.errors['minlength'].requiredLength} caracteres.`;
    if (ctrl.errors['maxlength']) return `No debe exceder ${ctrl.errors['maxlength'].requiredLength} caracteres.`;
    if (ctrl.errors['pattern']) return 'Formato inválido.';
    return 'Campo inválido.';
  }

  handleInput(ev: Event) {
    const v = (ev.target as HTMLInputElement).value;
    if (this.control) {
      this.control.setValue(v);
      this.control.markAsDirty();
    }
  }

  handleBlur() {
    if (this.control) {
      this.control.markAsTouched();
    }
  }
}