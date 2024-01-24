import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes: SiteRoute[] = [
    {title: 'Home', link: '/'},
    {title: 'About us', link: '/aboutus'},
    {title: 'Services', link: '/services'},
    {title: 'Contact', link: '/contact'},
  ];

}

interface SiteRoute {
  title: string;
  link: string;
}
