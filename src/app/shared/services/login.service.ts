import { Injectable } from "@angular/core";

@Injectable()
export class LoginService{

    private userdata: any = {};

    getUserData(){
        return this.userdata;
    }

    setUserData(newData){
        this.userdata = newData;
    }
}