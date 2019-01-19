import { ShoppingModule } from './shopping/shopping.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { NgModule } from "@angular/core";
import { HeaderComponent } from './header.component';
import { BrowserModule } from '@angular/platform-browser';
import { components } from './menulinks.components';
import { RouterModule, Route } from '@angular/router';
import {FormsModule} from '@angular/forms'

const appRoutes: Route[] = [
    { path: '', component: components.HomeComponent },
    { path: 'list', component: components.ListComponent },
    { path: '**', component: components.NotFoundComponent },

]

@NgModule({
    //register components
    declarations: [AppComponent, HeaderComponent,
        components.HomeComponent, components.ListComponent, components.NotFoundComponent],
    // Startup Component
    bootstrap: [AppComponent],
    // Module dependencies
    imports: [BrowserModule,FormsModule, LoginModule, ShoppingModule, RouterModule.forRoot(appRoutes)]

})

export class AppModule {

    constructor() {
        console.log('App Module Constructor...');
    }
}