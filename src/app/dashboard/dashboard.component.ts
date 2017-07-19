import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { FilterdataPipe } from '../filterdata.pipe'
import { SortByPipe } from '../sort-by.pipe';
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
  //arrayData:any;
  arryd:any;
  head;
  dont;
    arrayData=new Array;
    firstData=new Array;
    secondData=new Array;
    thirdData=new Array;
  // arr = new Array("orange", "mango", "banana", "sugar");
  //sorted;
  term = {manufacturer:[],storage:[],os:[],camera:[]};
  flag: any[] = [];
  //console.log(data1);
  constructor(private postsService: PostsService, public http: Http, private router: Router) { }
  ngOnInit() {
    //  this.term="Fsdfsdf";
    this.http.post('https://choco-lava.herokuapp.com/api/login', "").subscribe(
      (res: any) => {
        //     this.load = false;
        let data = res.json();
        console.log(data);
        // console.log("data",data.data[0].image);
        this.data1 = data.data;
        console.log("data1", this.data1);

        this.data1.sort(function(name1, name2) {
          if (name1.name < name2.name) {
            return -1;
          } else if (name1.name > name2.name) {
            return 1;
          } else {
            return 0;
          }
        });

      })
    // let sorted=this.data1.sort()
    // console.log("sorted",sorted);
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
this.newdata = this.data1;
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

      console.log(this.arryd);
      this.newdata = this.arryd;
      console.log(this.newdata);
  }


  // getData(data)
  // {
  // console.log(data);
  // //console.log(this.data1);
  // this.data1=this.data1.filter(res=>res.name.startsWith(data));
  // this.term=data;
  // console.log("res",this.data1);
  // }
  mobileInfo(searchTerm: any) {
    //(clicked)="onClicked($event)"
    //console.log(searchTerm);
    //this.clicked.emit(searchTerm);
    searchTerm = JSON.stringify(searchTerm);
    localStorage.setItem("mobile", searchTerm);
    this.router.navigate(['/mobileinfo']);
  }

}
