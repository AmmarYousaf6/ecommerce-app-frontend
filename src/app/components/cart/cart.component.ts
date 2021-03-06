import { Component, OnInit } from '@angular/core';
import {CartModelServer} from "../../models/cart.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartData : CartModelServer;
  cartTotal : Number;
  subTotal : Number;
  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.cartService.cartDataObs$.subscribe((data : CartModelServer) => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  }

  ChangeQuantity(index: number, increase: boolean) {
    this.cartService.UpdateCartData(index,increase);
  }
}
