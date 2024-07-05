import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services: Service[] = [
    {
      title: 'Automatización de procesos',
      image: '../../assets/AUTOMATIZACION.png'
    },
    {
      title: 'Cursos y capacitaciones',
      image: '../../assets/CAPACITACION.png'
    },
    {
      title: 'Diseño industrial',
      image: '../../assets/DISEÑO.png'
    },
    {
      title: 'Venta de equipo eléctrico, instrumentación y control',
      image: '../../assets/VENTA DE EQUIPO.png'
    },
    {
      title: 'Manufactura de cilindros neumáticos',
      image: '../../assets/FABRICACION.png'
    },
    {
      title: 'Soporte técnico',
      image: '../../assets/SOPORTE TECNICO.png'
    }
  ]
}

const service1: Service[] = [
{
  title: '',
  image: ''
}
];


interface Service {
  title: string;
  image: string;
}