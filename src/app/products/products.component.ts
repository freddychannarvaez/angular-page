import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  clients: Client[] = [
    {title: 'Bachoco', description: '', logo: '../../assets/bachoco.avif'},
    {title: 'Bepensa Motriz', description: '', logo: '../../assets/bepensa motriz.avif'},
    {title: 'Dunosusa', description: '', logo: '../../assets/dunosusa.avif'},
    {title: 'Glacial', description: '', logo: '../../assets/glacial.avif'},
    {title: 'Matpreo', description: '', logo: '../../assets/matpreo.avif'},
    {title: 'Predeco', description: '', logo: '../../assets/predeco.avif'},
    {title: 'Vertical', description: '', logo: '../../assets/vertical.avif'},
  ]
}

interface Client {
  title: string;
  description: string;
  logo: string;
}
