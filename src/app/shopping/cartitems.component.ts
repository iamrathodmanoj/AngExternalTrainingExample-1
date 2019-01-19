import { CartItem } from './../models/cartitem.model';
import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {

  cartItems: CartItem[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  deleteItem(itemIndex){
    this.cartService.deleteCartItem(itemIndex);
  }

  calculateTotalAmount(){
    let total = 0;
      
    for(let item of this.cartItems){
      total += item.price * item.quantity;
    }
    return total;
  }
}
