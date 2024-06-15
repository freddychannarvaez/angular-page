import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  brands: Brand[] = [
    {title: 'ABB', description: '', logo: '../../assets/abb.png'},
    {title: 'Allen Bradley', description: '', logo: '../../assets/allenbradley.png'},
    {title: 'Autonics', description: '', logo: '../../assets/autonics.png'},
    {title: 'Baldor', description: '', logo: '../../assets/baldor.png'},
    {title: 'Bonfiglioli', description: '', logo: '../../assets/bonfiglioli.png'},
    {title: 'Danfoss', description: '', logo: '../../assets/danfoss.png'},
    {title: 'Delta', description: '', logo: '../../assets/delta.png'},
    {title: 'Leeson', description: '', logo: '../../assets/leeson.png'},
    {title: 'Marathon', description: '', logo: '../../assets/marathon.png'},
    {title: 'Mitsubishi', description: '', logo: '../../assets/mitsubishi.png'},
    {title: 'Omron', description: '', logo: '../../assets/omron.png'},
    {title: 'Phoenix', description: '', logo: '../../assets/phoenix.png'},
    {title: 'Pneumax', description: '', logo: '../../assets/pneumax.png'},
    {title: 'Schneider', description: '', logo: '../../assets/schneider.png'},
    {title: 'SEW', description: '', logo: '../../assets/sew.png'},
    {title: 'Siemens', description: '', logo: '../../assets/siemens.png'},
    {title: 'Wago', description: '', logo: '../../assets/wago.png'},
    {title: 'Weidmüller', description: '', logo: '../../assets/weidmuller.png'},
  ]
}

interface Brand {
  title: string;
  description: string;
  logo: string;
}
