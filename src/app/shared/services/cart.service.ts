import { CartItem} from './../../models/cartitem.model';
import { Injectable } from "@angular/core";

@Injectable()
export class CartService{
    private cartData: CartItem[] = [];
    constructor(){

        // this.cartItemsData = [
        //     new CartItems(101,"Nissan",1000,1),
        //     new CartItems(101,"MCD",1000,5),
        //     new CartItems(101,"Zoomcar",1000,2),
        //     new CartItems(101,"Boost",1000,3)
        // ]
    }

    getCartItems(){
        return this.cartData;
        // return JSON.parse(JSON.stringify(this.cartData));
    }

    addCartItems(newItem: CartItem){
        this.cartData.push(newItem);
    }

    deleteCartItem(index:number){
        this.cartData.splice(index,1);
    }


}