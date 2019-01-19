import { Pipe, PipeTransform } from "@angular/core";


@Pipe({ name: 'searchData'})
export class SearchDataPipe implements PipeTransform{

    // let p of products | inputdata: queryString : filterKey
transform(inputData: any[], searchText: string, filterKey: string){
    if(searchText && filterKey){
        return inputData.filter((e) => e[filterKey].indexOf(searchText) > -1);
    }else{
        return inputData;
    }



    // if(searchText != undefined && filterKey != undefined && searchText != ''){}
}

}