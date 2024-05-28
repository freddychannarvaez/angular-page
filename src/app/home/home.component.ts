import { Component } from '@angular/core';
import { TranslateService } from '../common/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  content: any;

  constructor(private translateService: TranslateService) {
    this.translateService.dataObservable.subscribe((data) => {
      this.content = data;
    });
   }

}
