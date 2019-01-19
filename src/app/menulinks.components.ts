import  {  Component  }  from  "@angular/core";

@Component({
    // selector: "app-home",
    template: ` <h1> welcome to home Component </h1>
    <h4> {{content}} </h4> 
    <h3 [innerHtml]='content'> </h3>
    Count value is {{count}}<br/>
    Without Interpolation : <input type='text' value="count"> <br/>
    With Interpolation:  &nbsp; &nbsp; &nbsp;   <input type='text' value="{{count}}"><br/>
    With Property Binding: <input type='number' [value]="count"><br/>
    With Two way Binding: <input type='number' [(ngModel)]="count"><br/><br/>
    <button class="btn btn-success" (click)='incrementCount()'>Increase Count Value</button>
    `
})
class  HomeComponent {
    // content:string = 'Sample Home Content'; // Interpolation will only act as strings
    content:string = '<u>Sample Home Content</u>'; // to display HTML content use Property Binding
    count = 0;
   private incrementCount():void{
        this.count++;
    }
}


@Component({
    // selector: "app-list",
    //template: ` <h1> appList Component </h1>`
    template: `
    <div class="row">
        <div class="col-sm-7">
            <app-products></app-products>
        </div> 
        <div class="col-sm-5 card">
            <app-cartitems></app-cartitems>
        </div> 
    </div>
    `
})
class  ListComponent {

}


@Component({
    // selector: "app-notfound",
    template: ` <h1> NotFound Component </h1>`
})
class  NotFoundComponent {
    constructor() {
        console.log('NotFound Constructor');
    }
}


export const components = {
    NotFoundComponent: NotFoundComponent,
    ListComponent: ListComponent,
    HomeComponent: HomeComponent,
}