import { Component } from '@angular/core';
import { InfoDisplayComponent } from '@shared/components/molecules/info-display.component';

@Component({
  selector: 'present-form',
  imports: [InfoDisplayComponent],
  templateUrl: './present-form.component.html',
})
export class PresentFormComponent {
  infoData = {
    mainTitle: 'Conferencia Virtual: El Duelo',
    subtitle: '✨ Conferencias que tocan el alma ✨',
    description: '💔 ¿Alguna vez has sentido el eco de lo que ya no está? ¿O que tu alma grita... y nadie escucha?\n\nTe invitamos a dos noches especiales donde hablaremos con sinceridad sobre el dolor, la ausencia y cómo seguir adelante con esperanza.',
    sections: [
      {
        date: 'Lunes 28 de abril',
        title: 'El eco de lo que ya no está: Viviendo con la ausencia',
      },
      {
        date: 'Lunes 5 de mayo',
        title: 'Cuando el alma grita y nadie escucha',
      },
    ],
    details: [
      '8:00 PM-10:00pm',
      'Vía Zoom | Abierto al público | Gratuito',
    ],
    footer: 'Prepárate para reflexionar, sanar y compartir.'
  };
}
