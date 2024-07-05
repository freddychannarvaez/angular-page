import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  clients: Client[] = [
    {title: 'Bachoco', description: '', logo: '../../assets/bachoco.png'},
    {title: 'Bepensa Motriz', description: '', logo: '../../assets/bepensa motriz.png'},
    {title: 'Dunosusa', description: '', logo: '../../assets/dunosusa.png'},
    {title: 'Glacial', description: '', logo: '../../assets/glacial.png'},
    {title: 'Matpreo', description: '', logo: '../../assets/matpreo.png'},
    {title: 'Predeco', description: '', logo: '../../assets/predeco.png'},
    {title: 'Vertical', description: '', logo: '../../assets/vertical.png'},
  ]
}

interface Client {
  title: string;
  description: string;
  logo: string;
}
