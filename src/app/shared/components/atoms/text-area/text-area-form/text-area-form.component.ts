import { Component, input, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { TextareaModule } from 'primeng/textarea';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'atom-text-area',
  imports: [IftaLabelModule, TextareaModule, TooltipModule],
  templateUrl: './text-area-form.component.html',
})
export class TextAreaComponent implements AfterViewInit {
  placeholder = input<string>('');
  labelFor = input<string>('');
  label = input<string>('');
  rows = input<number>(5);
  cols = input<number>(30);

  formGroup = input<FormGroup | undefined>(undefined, { alias: 'formGroup' });
  formControlName = input<string | undefined>(undefined, { alias: 'formControlName' });
  formSubmitted = input(false, { alias: 'formSubmitted' });

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  get control(): any {
    if (this.formGroup() && this.formControlName()) {
      return this.formGroup()!.get(this.formControlName()!);
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
    if (ctrl.errors['minlength']) return `Debe tener al menos ${ctrl.errors['minlength'].requiredLength} caracteres.`;
    if (ctrl.errors['maxlength']) return `No debe exceder ${ctrl.errors['maxlength'].requiredLength} caracteres.`;
    if (ctrl.errors['pattern']) return 'Formato inválido.';
    return 'Campo inválido.';
  }

  handleInput(ev: Event) {
    const v = (ev.target as HTMLTextAreaElement).value;
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
