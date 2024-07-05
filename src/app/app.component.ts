import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes: SiteRoute[] = [
    {title: 'Inicio', link: '/'},
    {title: 'Nosotros', link: '/nosotros'},
    {title: 'Productos', link: '/productos'},
    {title: 'Contacto', link: '/contacto'},
  ];

}

interface SiteRoute {
  title: string;
  link: string;
}
