import { Injectable } from '@angular/core';
import * as en from '../../environments/content.en';
import * as es from '../../environments/content.es';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  dataObservable: BehaviorSubject<any> = new BehaviorSubject<any>({});
  data: any = {};

  constructor() { }

  use(lang: string) {
    if (lang === 'en') {
      this.data = en.content;
      this.dataObservable.next(this.data);
      return this.data;
    } else if (lang === 'es') {
      this.data = es.content;
      this.dataObservable.next(this.data);
      return this.data;
    } else {
      this.data = en.content;
      this.dataObservable.next(this.data);
      return this.data;
    }
  }
}
