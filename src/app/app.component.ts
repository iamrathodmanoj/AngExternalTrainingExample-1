import {Component} from '@angular/core';

@Component({
    //specify tag name for component
    selector: 'app-root',
    template: `<app-header></app-header>
    <router-outlet></router-outlet>`
    // template: `<h3> My First Angular Component</h3>
    //     <app-header></app-header>
    // `
})
export class AppComponent{

    constructor(){
        console.log("App component constructor...");
    }
}