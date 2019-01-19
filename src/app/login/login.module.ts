import { SharedModule } from './../shared/shared.module';
import { NgModule } from "@angular/core";
import { SignInComponent } from "./signIn.component";
import { SigningUpComponent } from "./signingUp.component";
import { RouterModule, Route } from '@angular/router';

const loginRoutes: Route[] = [
    {path: "signin", component: SignInComponent},
    {path: "signup", component: SigningUpComponent},
]

@NgModule({
    declarations: [SignInComponent, SigningUpComponent],
    imports: [RouterModule.forChild(loginRoutes), SharedModule]
})
export class LoginModule{
 constructor(){
     console.log('Login Module...');
 }
}