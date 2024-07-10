import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  brands: Brand[] = [
    {title: 'ABB', description: '', logo: '../../assets/abb.avif'},
    {title: 'Allen Bradley', description: '', logo: '../../assets/allenbradley.avif'},
    {title: 'Autonics', description: '', logo: '../../assets/autonics.avif'},
    {title: 'Baldor', description: '', logo: '../../assets/baldor.avif'},
    {title: 'Bonfiglioli', description: '', logo: '../../assets/bonfiglioli.avif'},
    {title: 'Danfoss', description: '', logo: '../../assets/danfoss.avif'},
    {title: 'Delta', description: '', logo: '../../assets/delta.avif'},
    {title: 'Leeson', description: '', logo: '../../assets/leeson.avif'},
    {title: 'Marathon', description: '', logo: '../../assets/marathon.avif'},
    {title: 'Mitsubishi', description: '', logo: '../../assets/mitsubishi.avif'},
    {title: 'Omron', description: '', logo: '../../assets/omron.avif'},
    {title: 'Phoenix', description: '', logo: '../../assets/phoenix1.avif'},
    {title: 'Pneumax', description: '', logo: '../../assets/pneumax.avif'},
    {title: 'Schneider', description: '', logo: '../../assets/schneider.avif'},
    {title: 'SEW', description: '', logo: '../../assets/sew.avif'},
    {title: 'Siemens', description: '', logo: '../../assets/siemens1.avif'},
    {title: 'Wago', description: '', logo: '../../assets/wago.avif'},
    {title: 'Weidmüller', description: '', logo: '../../assets/weidmuller.avif'},
  ]
}

interface Brand {
  title: string;
  description: string;
  logo: string;
}
