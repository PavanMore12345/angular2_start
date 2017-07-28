import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { PostsService } from '../posts.service';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { FilterdataPipe } from '../filterdata.pipe'
import { SortByPipe } from '../sort-by.pipe';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[FilterdataPipe]
})
export class DashboardComponent implements OnInit {
  //value="manufacturer";
  //@Input() result:any="";
  data1;
  newdata:any[];
  mobiledata;
  mobileaa;
  ratingdata;
  nodata;
  rating;
  newrating;
  ratingArray=[];
  mobilerating;
  //arrayData:any;
  arryd:any;
  // arr = new Array("orange", "mango", "banana", "sugar");
  //sorted;
  term = {manufacturer:[],storage:[],os:[],camera:[]};
  flag: any[] = [];
  //console.log(data1);
  constructor(private postsService: PostsService, public http: Http, private router: Router,private toastr: ToastsManager,
		private _vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(_vcr);
         }
  ngOnInit() {
    //  this.term="Fsdfsdf";
    this.http.post('https://choco-lava.herokuapp.com/api/login', "").subscribe(
      (res: any) =>
      {
        let data = res.json();
        console.log(data);
        data=JSON.stringify(data);
        localStorage.setItem("gomobile",data);
        this.mobiledata = JSON.parse(localStorage.getItem("gomobile"));
        this.data1 =this.mobiledata.data;
        console.log("data1", this.data1);
        this.data1.sort(function(name1, name2)
        {
          if (name1.name < name2.name) {
            return -1;
          } else if (name1.name > name2.name) {
            return 1;
          } else {
            return 0;
          }
        });

      })
      if(JSON.parse(localStorage.getItem("dashboard")))
   {
   this.toastr.success("Success", 'login success');
   localStorage.setItem("dashboard", JSON.stringify(0));
   }
 this.rating=JSON.parse(localStorage.getItem("rating"));
 // console.log("rating",this.rating);
 this.mobileaa=JSON.parse(localStorage.getItem("gomobile"));
 this.mobilerating=this.mobileaa.data;
   // console.log("this.data",this.mobilerating,"this.rating",this.rating);
   for(var i=0;i<this.rating.length;i++){
        let id = this.rating[i].id;
        let rating = this.rating[i].ratings;
        this.mobilerating = this.mobilerating.map(function(data){
                if(data.id == id){
                   data.rating = Math.round((data.rating+rating)/2);
                }
                return data;
            });
   }
    // let arrayLength = (this.mobilerating.length>this.rating.length ? this.mobilerating.length : this.rating.length) || 0;
   // for(var i=0;i<this.mobilerating.length;i++)
   // {
   //   for(var j=0;j<this.rating.length;j++)
   //   {
   //       let index = this.rating.findIndex(function(data){
   //          return (data.id ==this.mobilerating[i].id);
   //       });
   //       console.log(index);
//    if(this.mobilerating[i].id==this.rating[j].id)
//     {
//     this.newrating=((this.mobilerating[i].rating+this.rating[j].ratings)/2);
//     console.log("newrating",this.newrating);
//     this.ratingdata={id:this.mobilerating[i].id,rating:this.newrating};
//     if(this.ratingArray.indexOf(this.ratingdata) == -1) {
//     this.ratingArray.push(this.ratingdata);
//     }
//
// }

//   }
// }
// for(var i=0;i<this.mobilerating.length;i++)
// {
//     for(var j=0;j<this.rating.length;j++)
//     {
//     if(this.mobilerating[i].id!=this.rating[j].id)
//      {
//   this.ratingdata={id:this.mobilerating[i].id,rating:this.mobilerating[i].rating}
//   // if(this.ratingArray.indexOf(this.ratingdata) == -1) {
//   this.ratingArray.push(this.ratingdata);
//   // }
//      }
// }
// }
// console.log(this.ratingArray);
}

  onClicked(value: any)
  {

      //this.term[value.head].push(value.data);
     if(value=="clear")
     {
    this.term = {manufacturer:[],storage:[],os:[],camera:[]};
     }else
     {
      console.log("value",value);
      if (value.checked) {
     this.term[value.head].push(value.data);
   }

   else {
     let remove = this.term[value.head].indexOf(value.data);
     console.log("remove",remove);
     this.term[value.head].splice(remove, 1);
   }
}
this.newdata = this.mobilerating;
var self = this;
this.arryd = this.newdata.filter(function(mobileObj){
  let manufacturerFlag=true,storageFlag=true,cameraFlag=true,osFlag=true;
  if(self.term.manufacturer.length>0)
    manufacturerFlag = (self.term.manufacturer.indexOf(mobileObj.specs.manufacturer)>-1)
  if(self.term.storage.length>0)
    storageFlag = (self.term.storage.indexOf(mobileObj.specs.storage)>-1)
  if(self.term.camera.length>0)
    cameraFlag = (self.term.camera.indexOf(mobileObj.specs.camera)>-1)
  if(self.term.os.length>0)
    osFlag = (self.term.os.indexOf(mobileObj.specs.os)>-1)
return (manufacturerFlag&&storageFlag&&cameraFlag&&osFlag);
});
this.arryd.sort(function(name1, name2)
{
  if (name1.name < name2.name) {
    return -1;
  } else if (name1.name > name2.name) {
    return 1;
  } else {
    return 0;
  }
});
      console.log(this.arryd.length);
      this.newdata = this.arryd;
      console.log(this.newdata);

  }
  mobileInfo(searchTerm: any)
  {
    searchTerm = JSON.stringify(searchTerm);
    localStorage.setItem("mobile", searchTerm);
    this.router.navigate(['/mobileinfo']);
  }

}
