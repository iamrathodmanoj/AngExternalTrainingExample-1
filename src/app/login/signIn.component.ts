import { LoginService } from './../shared/services/login.service';
import { HeaderComponent } from './../header.component';
import  {  Component  }  from  "@angular/core";

@Component({
    selector: "sign-in",
    // template: ` <h1> Sign in Component </h1>
    template: ` <h1> Welcome {{userName}} </h1>
    <my-sign [formTitle]="title" (getFormUserDetails)='getFormDetails($event)'></my-sign>
    `,
})
export class SignInComponent  {
    userName:string = "MyGuest";
    title="Login";

    constructor(private loginservice: LoginService){
        
    }
    getFormDetails(data){
        this.userName = data.userName;
        this.loginservice.setUserData({userName: data.userName});
    }


}