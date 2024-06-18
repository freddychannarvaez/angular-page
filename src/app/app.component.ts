import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes: SiteRoute[] = [
    {title: 'Nosotros', link: '/'},
    {title: 'Servicios', link: '/'},
    {title: 'Productos', link: '/'},
    {title: 'Contacto', link: '/contacto'},
  ];

}

interface SiteRoute {
  title: string;
  link: string;
}
