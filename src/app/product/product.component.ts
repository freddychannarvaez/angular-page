import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  product: Product = {
      src: "../../../assets/bottle.jpg", 
      title: "lorem",
      descrption: "lorem ipsum",
      price: 10
    }
}

interface Product {
  src: string;
  title: string;
  descrption: string;
  price: number;
}
