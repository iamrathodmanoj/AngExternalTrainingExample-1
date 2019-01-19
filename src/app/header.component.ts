import { Component } from '@angular/core';
import { LoginService } from './shared/services/login.service';


@Component({
    selector:"app-header",
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    appTitle:string; //type-Annotation
    username = "Guest"; // type-Inference
    constructor(private loginservice: LoginService){
        console.log('In Header constructor...');
        this.appTitle = "My Shopping Cart";
    }

    showUserName(){
        // return this.username;
        return this.loginservice.getUserData().userName;
    }
}