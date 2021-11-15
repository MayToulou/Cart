import { Component, OnInit } from '@angular/core';
import { cartitems } from '../data/cartItems';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public currentCartItems = cartitems;
  
  public totalPriceOrder:number = 0;

  _sendOrder(): void{};

  _incrementQTY(id: number, quantity: number): void {};

  _calculateTotalPriceOrder()
  {
    this.totalPriceOrder = 0;
    for(let Item of cartitems)
    {
      this.totalPriceOrder += Item.totalPrice;
    }
  }

  constructor() { }

  ngOnInit(): void
  {
    this._calculateTotalPriceOrder();
  }

}
