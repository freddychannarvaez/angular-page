import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
  aboutTitle = `Conoce más sobre nosotros`;
  aboutDescription = `En MSA AUTOMATION DEVICES estamos enfocados en el crecimiento de los clientes por lo cual ofrecemos servicios de automatización, instrumentación y control, esto se logra con el esfuerzo de nuestro equipo multidisciplinario profesional en colaboración de los proveedores. `;
  missionTitle = `Misión`;
  missionDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
  visionTitle = `Visión`;
  visionDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
}
