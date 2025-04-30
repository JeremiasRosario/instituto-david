import { Component, input } from '@angular/core';

@Component({
    selector: 'molecules-info-display',
    standalone: true,
    templateUrl: './info-display.component.html',
})
export class InfoDisplayComponent {
    data = input.required<any>();
}
