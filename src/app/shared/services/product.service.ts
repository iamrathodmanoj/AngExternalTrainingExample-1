import { Product } from './../../models/product.model';
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService{
    private productsData: Product[] = [];
    constructor(){
        this.productsData = [
            new Product(101,"Nissan",1000,"Car brand"),
            new Product(101,"MCD",1000,"Food Chain"),
            new Product(101,"Zoomcar",1000,"car rentals"),
            new Product(101,"Boost",1000,"milk energy drinks")
        ]
    }

    getProducts(){
        return this.productsData;
    }
}