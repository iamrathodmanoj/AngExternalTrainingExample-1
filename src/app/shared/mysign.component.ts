import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'my-sign',
    //template: `<h3> My Sign Component </h3>
    template: `<h3> {{title}} </h3>
    <form>
    UserName: <input type='text' placeHolder='Enter Username' #txtUser> <br/>
    Password: <input type='password'  placeHolder='Enter Password' #txtPwd> <br/>
    <button type="button" class ="btn btn-primary" 
            (click)='handleSubmit(txtUser.value, txtPwd.value)'>{{title}}</button>
    </form>
    `
})
export class MySignComponent {

    @Input('formTitle') title: string ;
    @Output('getFormUserDetails') myEvent:EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        console.log('my-Sign component constructor - Reusable component')
        console.log("title: ", this.title);
    }

    ngOnInit(){
        console.log('ngOnInit method called');
        console.log("title: ", this.title);
    }

    ngOnChanges(){
        console.log('ngOnChanges method called');
    }

    ngOnDestroy(){
        console.log('ngOnDestroy method called');
    }

    handleSubmit(username: string, password: string): void{
        console.log('Submit clicked -> username:', username,"password:",password);
        this.myEvent.emit({ userName: username, password: username});
    }
}