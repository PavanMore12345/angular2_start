import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

    transform(data1: any, args:any): any {
        //console.log(array)
        console.log("args",args)
        console.log("data1",data1);
      data1.sort((a: any, b: any) => {
  	    if ( a.name < b.name ){
  	    	return -1;
  	    }else if( a.name > b.name ){
  	        return 1;
  	    }else{
  	    	return 0;
  	    }
      });
      return data1;
    }
  }
