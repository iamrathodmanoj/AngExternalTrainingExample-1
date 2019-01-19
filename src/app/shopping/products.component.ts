import { CartItem } from './../models/cartitem.model';
import { CartService } from './../shared/services/cart.service';
import { Product } from './../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  curDate: Date = new Date();
  queryString:string = '';
  
  constructor(
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(selectedProduct:Product) {
    let newItem = new CartItem(selectedProduct.id, selectedProduct.name, selectedProduct.price,1);
    this.cartService.addCartItems(newItem);
  }
}
