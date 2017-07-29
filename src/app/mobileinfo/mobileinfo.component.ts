import { Component, OnInit,OnDestroy,NgModule,Output,EventEmitter,ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ToastsManager,ToastOptions } from 'ng2-toastr/ng2-toastr';
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
   wishlistcount=0;
   @Output() clicked=new EventEmitter<any>();
  constructor(private route: ActivatedRoute,private toastr: ToastsManager,
		private _vcr: ViewContainerRef )
      {
             this.toastr.setRootViewContainerRef(_vcr);
     }
  ngOnInit()  {
           this.data=JSON.parse(localStorage.getItem("mobile"));
           //console.log(this.data);
           for(this.i=1;this.i<=this.data.rating;this.i++)
           {
               this.items.push(this.i);
           }
           if(JSON.parse(localStorage.getItem("status")))
        {
        this.toastr.success("Success", 'card added successfully.');
        localStorage.setItem("status", JSON.stringify(0));
        }

           //console.log(this.items);
}
addtoCart(data){
console.log("addtoCart");
 //this.names.push(data);
// localStorage.setItem("addtocard",JSON.stringify(this.names));
   var data1;
   var names=[];
   var a=[];
   if(localStorage.getItem("addToCard"))
   {
       data1=JSON.parse(localStorage.getItem("addToCard"));
       names=data1;
       console.log(names);
       for(let i=0;i<names.length;i++)
       {
           if(names[i].id==data.id)
           {
                this.toastr.error("Oops!", 'it already exist in card.');
           return ;
          }
        //    alert("data is already in card");

       }
       names.push(data);
    }
    else
    {
        names.push(data);
    }
    // window.location.reload();
let abc=JSON.stringify(names);
 // this.toastr.success("Success", 'card added successfully.');
// window.location.reload();
console.log("abc",abc);
 localStorage.setItem("addToCard",abc);
 this.count=JSON.parse(localStorage.getItem("count"));
this.count=this.count+1;
localStorage.setItem("status",JSON.stringify(1));
    window.location.reload();

//var count=count+1;
//++count;
 localStorage.setItem("count",JSON.stringify(this.count));
  // this.data1=JSON.parse(localStorage.getItem("addtocard"));
  // console.log("data1",this.data1);
 // console.log(this.data1);
//console.log(this.names);

}
wishlist(data)
{
   var data1;
   var names=[];
   var a=[];
   if(localStorage.getItem("wishlist"))
   {
       data1=JSON.parse(localStorage.getItem("wishlist"));
       names=data1;
       console.log(names);
       for(let i=0;i<names.length;i++)
       {
           if(names[i].id==data.id)
           {
                this.toastr.error("Oops!", 'it already exist in wishlist.');
           return ;
          }
        //    alert("data is already in card");

       }
       names.push(data);
    }
    else
    {
        names.push(data);
    }
    // window.location.reload();
let abc=JSON.stringify(names);
 // this.toastr.success("Success", 'card added successfully.');
// window.location.reload();
console.log("abc",abc);
 localStorage.setItem("wishlist",abc);
  this.toastr.success("Success", 'successfully added to the wishlist.');
}
}
