import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from "@angular/core";
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CategoriesComponent } from './categories.component';

@NgModule({

  declarations: [ProductsComponent, CartitemsComponent, CategoriesComponent],
  exports: [ProductsComponent,CartitemsComponent],
  imports: [CommonModule, FormsModule, SharedModule, 
    RouterModule.forChild([{path: 'categories', component: CategoriesComponent}])
  ]
  
})
export class ShoppingModule{
    constructor(){
         console.log('Shopping Module..');
    }
}
