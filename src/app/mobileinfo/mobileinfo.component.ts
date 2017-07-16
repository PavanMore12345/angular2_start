import { Component, OnInit,OnDestroy,NgModule} from '@angular/core';
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
      data:any;
      i:any;
       items: number[]=[];
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit()  {
           this.data=JSON.parse(localStorage.getItem("mobile"));
           console.log(this.data);
           for(this.i=1;this.i<=this.data.rating;this.i++)
           {
               this.items.push(this.i);
           }
           console.log(this.items);
}
// createRange(number){
//     var items: number[] = [];
//     for(this.i = 1; i <= number; i++){
//        items.push(i);
//     }
//     return items;
//   }
}
