import { Component, forwardRef, ChangeDetectionStrategy, input, signal, untracked } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'atom-check-box-form',
  standalone: true,
  imports: [Checkbox],
  templateUrl: './check-box-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckBoxFormComponent),
    multi: true
  }]
})
export class CheckBoxFormComponent implements ControlValueAccessor {
  label = input.required<string>();
  options = input.required<{ label: string; value: any }[]>();

  value = signal<boolean>(false);

  private onChange: (v: boolean) => void = () => { };
  private onTouched: () => void = () => { };

  writeValue(obj: boolean): void {
    untracked(() => this.value.set(obj));
  }

  registerOnChange(fn: (v: boolean) => void): void {
    console.log('registerOnChange', fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }


  handleCheckBoxChange(checked: boolean) {
    console.log('handleCheckBoxChange', checked);
    this.value.set(checked);
    this.onTouched();
    this.onChange(checked);
  }
}
