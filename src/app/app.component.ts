import { Component } from '@angular/core';
import { TranslateService } from './common/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content: any;

  constructor(private translateService: TranslateService) {
    this.translateService.dataObservable.subscribe((data) => {
      this.content = data;
    });
   }

  // routes: SiteRoute[] = [
  //   // {title: 'Home', link: '/', icon: 'home'},
  //   {title: 'About us', link: '/about-us', icon: 'people'},
  //   {title: 'Products', link: '/products', icon: 'work'},
  //   {title: 'Contact', link: '/contact', icon: 'contact_page'},
  // ];

  onSelectSpanish() {
    this.content = this.translateService.use('es');
  }

  onSelectEnglish() {
    this.content = this.translateService.use('en');
  }
}
// interface SiteRoute {
//   title: string;
//   link: string;
//   icon?: string;
// }
