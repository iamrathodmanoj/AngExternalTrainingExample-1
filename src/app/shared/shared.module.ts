import { CategoryService } from './services/category.service';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { MySignComponent } from './mysign.component';
import { NgModule } from "@angular/core";
import { LoginService } from './services/login.service';
import { SearchDataPipe } from './searchData.pipe';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [MySignComponent, SearchDataPipe],
    exports: [MySignComponent, SearchDataPipe],
    // Each and every component/member is private in Module and hence export components
    // which are need to be used for another modules. 
    providers: [LoginService, ProductService, CartService, CategoryService],
    //Useful when you need to work with non UI data and communicating between components
    imports: [HttpClientModule]
})
export class SharedModule {
    constructor() {
        console.log('In Shared module constructor');
    }
}