import { Category } from './../models/category.model';
import { CategoryService } from './../shared/services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  categories: Category[] = [];
  formCategory = new Category(null, null);
  ngOnInit() {
   // this.categoryService.getCategories().subscribe(this.successFunction.bind(this), this.errorFunction, this.completeFunction)
    this.categoryService.getCategories().subscribe((response) => {
      this.successFunction(response);
    }, (err) => {this.errorFunction(err)},
    () => {this.completeFunction();})
  }

  successFunction(response: Category[]) {
    console.log("Success Function called", response);
    this.categories = response;
  }

  errorFunction(error) {
    console.log("Error Function called");
  }

  completeFunction() {
    console.log("Complete Function called");
  }

  add() {
    this.categoryService.addCategory(this.formCategory).subscribe(
      (data) => {
        console.log('add success', data);
        this.categories.push(data);
      },
      (err) => { console.log('add error') }
    )
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(
      (data) => {
        console.log("Delete Scuccess");
        let idx = this.categories.findIndex((e) => e.id == id);
        this.categories.splice(idx, 1)
      },
      (erro) => { console.log('delete error') }

    );
  }

  editCategory(selectedCategory:Category){
    //this.formCategory = selectedCategory; //it acts as 2 way binding and hence need to pass a copy of selected category 
    Object.assign(this.formCategory, selectedCategory);
  }

  update(){
    this.categoryService.updateCategory(this.formCategory).subscribe(
      (data) => {
        console.log("update Scuccess");
        let idx = this.categories.findIndex((e) => e.id == data.id);
        this.categories[idx] = data;

      },
      (erro) => { console.log('update error') },
    )
  }
}
