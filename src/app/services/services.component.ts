import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services: Service[] = [
    {
      title: 'Servicio 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '../../assets/abb.png'
    },
    {
      title: 'Servicio 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '../../assets/delta.png'
    },
    {
      title: 'Servicio 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '../../assets/omron.png'
    },
    {
      title: 'Servicio 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '../../assets/sew2.png'
    }
  ]
}

const service1: Service[] = [
{
  title: '',
  description: `En MSA AUTOMATION DEVICES estamos enfocados en el crecimiento de los clientes por lo cual ofrecemos servicios de automatización, instrumentación y control, esto se logra con el esfuerzo de nuestro equipo multidisciplinario profesional en colaboración de los proveedores.`,
  image: ''
}
];


interface Service {
  title: string;
  description: string;
  image: string;
}