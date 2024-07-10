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
      image: '../../assets/AUTOMATIZACION.avif'
    },
    {
      title: 'Cursos y capacitaciones',
      image: '../../assets/CAPACITACION.avif'
    },
    {
      title: 'Diseño industrial',
      image: '../../assets/DISENO.avif'
    },
    {
      title: 'Venta de equipo eléctrico, instrumentación y control',
      image: '../../assets/VENTA DE EQUIPO.avif'
    },
    {
      title: 'Manufactura de cilindros neumáticos',
      image: '../../assets/FABRICACION.avif'
    },
    {
      title: 'Soporte técnico',
      image: '../../assets/SOPORTE TECNICO.avif'
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