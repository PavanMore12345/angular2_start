import { Pipe, PipeTransform } from '@angular/core';
// import{data1}from './dashboard';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

  transform(data1: any, arryd: any): any {
      //console.log(term)
      if(arryd==undefined)
      {
          console.log("termmmmmmm");
          //console.log(arrayData);
          return data1;
      }
//console.log(term);
return arryd;
  }
}
