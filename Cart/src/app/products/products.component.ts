import { Component, OnInit } from '@angular/core';
import { products } from '../data/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public allProducts = products;

  _addItemToCart(id: any, quantity: any): void{
    // TODO missing backend
  }

  constructor() { }

  ngOnInit(): void {
  }

}
