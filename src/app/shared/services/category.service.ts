import { Category } from './../../models/category.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CategoryService{
    private restURL = "http://localhost:3000/wscategories";

    constructor(private http:HttpClient){}

    getCategories(){
        return this.http.get<Category[]>(this.restURL);
    } 

    addCategory(newcategory: Category){
        return this.http.post<Category>(this.restURL, newcategory);
    }

    deleteCategory(id:number){
        return this.http.delete(this.restURL+"/"+id);
    }

    updateCategory(modifiedCategory:Category){
        return this.http.put<Category>(this.restURL+"/"+modifiedCategory.id,modifiedCategory);
    }
}