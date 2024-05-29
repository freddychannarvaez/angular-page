import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
import { BasicModule } from './common/basic.module';
import { HomeComponent } from './home/home.component';
import { TranslateService } from './common/translate.service';
import { isPlatformBrowser } from '@angular/common';
import { ProductComponent } from './product/product.component';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('es');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // HttpClientModule,
    BasicModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object) {
      if (isPlatformBrowser(platformId)) {
        translate.use(navigator.language);
      }
  }
 }
