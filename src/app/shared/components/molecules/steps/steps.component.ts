import { Component, input, output, signal, OnChanges, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StepsModule } from 'primeng/steps';

@Component({
  selector: 'molecules-steps',
  imports: [StepsModule],
  templateUrl: './steps.component.html',
})
export class StepsComponent implements OnChanges {

  items: MenuItem[] = [];
  step = input<number>(0);
  stepChange = output<number>();
  activeIndex = signal<number>(0);
  stepsValid = input<boolean[] | undefined>(undefined); // Nuevo input para validez de steps

  constructor() {
    this.items = [
      { label: 'Step 1', command: () => this.onStepChange(0) },
      { label: 'Step 2', command: () => this.onStepChange(1) },
      { label: 'Step 3', command: () => this.onStepChange(2) },
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['step']) {
      this.activeIndex.set(this.step());
    }
  }

  onStepChange(index: number) {
    // Validar que los steps previos sean válidos
    if (this.stepsValid() && index > 0) {
      for (let i = 0; i < index; i++) {
        if (!this.stepsValid()![i]) {
          return; // No permitir avanzar si algún step previo no es válido
        }
      }
    }
    this.activeIndex.set(index);
    this.stepChange.emit(index);
  }
}
