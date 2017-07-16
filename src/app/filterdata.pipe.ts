import { Pipe, PipeTransform } from '@angular/core';
// import{data1}from './dashboard';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

  transform(data1: any, term: any): any {
      //console.log(term)
      if(term.length==0)
      {
          console.log("termmmmmmm");
          return data1;
      }
    //   console.log("data1",data1);
      return term;
    // return data1.data.name;
 //     return data1.filter(function(data)
 // {
 //     return data.name.includes(term)
 // })
  }
}
