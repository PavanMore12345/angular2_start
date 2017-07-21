import { Component, OnInit,OnDestroy,NgModule,Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mobileinfo',
  templateUrl: './mobileinfo.component.html',
  styleUrls: ['./mobileinfo.component.css']
})
@NgModule({
    imports: [
        CommonModule
    ]
})
export class MobileinfoComponent implements OnInit {
    data1:any;
      data:any;
      cart:any[]=[];
      names1=new Array();
      i:any;
       items: number[]=[];
    public names=new Array();
    count=0;
    @Output() clicked=new EventEmitter<any>();
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit()  {
           this.data=JSON.parse(localStorage.getItem("mobile"));
           //console.log(this.data);
           for(this.i=1;this.i<=this.data.rating;this.i++)
           {
               this.items.push(this.i);
           }
           //console.log(this.items);
}
addtoCart(data){

 //this.names.push(data);
// localStorage.setItem("addtocard",JSON.stringify(this.names));
   var data1;
   var names=[];
   var a=[];
   if(localStorage.getItem("addtocard"))
   {
       data1=JSON.parse(localStorage.getItem("addtocard"));
       names=data1;
       console.log(names);
       for(let i=0;i<names.length;i++)
       {
           if(names[i].id==data.id)
           return ;
        //    alert("data is already in card");

       }
       names.push(data);
    }
    else
    {
        names.push(data);
    }
let abc=JSON.stringify(names);
alert("card added to the card");
 localStorage.setItem("addtocard",abc);
 this.count=JSON.parse(localStorage.getItem("count"));
this.count=this.count+1;
//var count=count+1;
//++count;
 localStorage.setItem("count",JSON.stringify(this.count));
  // this.data1=JSON.parse(localStorage.getItem("addtocard"));
  // console.log("data1",this.data1);
 // console.log(this.data1);
//console.log(this.names);
}
// createRange(number){
//     var items: number[] = [];
//     for(this.i = 1; i <= number; i++){
//        items.push(i);
//     }
//     return items;
//   }
}
