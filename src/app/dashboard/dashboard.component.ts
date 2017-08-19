import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { PostsService } from '../posts.service';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { FilterdataPipe } from '../filterdata.pipe'
import { SortByPipe } from '../sort-by.pipe';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [FilterdataPipe]
})
export class DashboardComponent implements OnInit {
  //value="manufacturer";
  //@Input() result:any="";
  ascendingdata;
  newdata: any[];
  mobiledata;
  mobileScope;
  ratingdata;
  nodata;
  rating;
  newrating;
  ratingArray = [];
  mobilerating;
  arryd: any;
  term = { manufacturer: [], storage: [], os: [], camera: [] };
  flag: any[] = [];
  constructor(private postsService: PostsService, public http: Http, private router: Router, private toastr: ToastsManager, private options: ToastOptions,
    private _vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(_vcr);
    this.options.toastLife = 1000;
  }
  ngOnInit() {
    /* this api is called to access data from api*/
    this.http.post('https://choco-lava.herokuapp.com/api/login', "").subscribe(
      (res: any) => {
        let mobiledata = res.json();
        this.ascendingdata = mobiledata.data;
        /*it sort data into anscending order by name.*/
        this.ascendingdata.sort(function(name1, name2) {
          if (name1.name < name2.name) {
            return -1;
          } else if (name1.name > name2.name) {
            return 1;
          } else {
            return 0;
          }
        });
      })
    //  if (JSON.parse(localStorage.getItem("dashboard"))) {
    //    this.toastr.success("Success", 'login success');
    //    localStorage.setItem("dashboard", JSON.stringify(0));
    //  }
    this.rating = JSON.parse(localStorage.getItem("rating"));
    this.mobileScope = JSON.parse(localStorage.getItem("gomobile"));
    this.mobilerating = this.mobileScope.data;
    //  let ratinglen = this.rating.length;
    //  ratinglen = ratinglen + 1;
    for (var i = 0; i < this.rating.length; i++) {
      let id = this.rating[i].id;
      let rating = this.rating[i].ratings;
      this.mobilerating = this.mobilerating.map(function(data) {
        if (data.id == id) {
          data.rating = Math.round((data.rating + rating) / 2);
          console.log("datarating", data.rating);
        }
        return data;
      });
    }
  }
  /* when click on sidebar this function is called..  */
  onClicked(value: any) {
    /* when click on clear button*/
    if (value == "clear") {
      this.term = { manufacturer: [], storage: [], os: [], camera: [] };
    } else {
      console.log("value", value);
      /* when we checked particular item*/
      if (value.checked) {
        this.term[value.head].push(value.data);
      } else {
        /* when uncheck particular item */
        let remove = this.term[value.head].indexOf(value.data);
        console.log("remove", remove);
        this.term[value.head].splice(remove, 1);
      }
    }
    this.newdata = this.ascendingdata;
    var self = this;
    this.arryd = this.newdata.filter(function(mobileObj) {
      let manufacturerFlag = true, storageFlag = true, cameraFlag = true, osFlag = true;
      if (self.term.manufacturer.length > 0)
        /* it returns true or false checked element from manufacturer */
        manufacturerFlag = (self.term.manufacturer.indexOf(mobileObj.specs.manufacturer) > -1)
      if (self.term.storage.length > 0)
        /* it returns true or false checked element from storage */
        storageFlag = (self.term.storage.indexOf(mobileObj.specs.storage) > -1)
      if (self.term.camera.length > 0)
        /* it returns true or false checked element from camera */
        cameraFlag = (self.term.camera.indexOf(mobileObj.specs.camera) > -1)
      if (self.term.os.length > 0)
        /* it returns true or false checked element from Os */
        osFlag = (self.term.os.indexOf(mobileObj.specs.os) > -1)
      return (manufacturerFlag && storageFlag && cameraFlag && osFlag);
    });
    console.log(this.arryd.length);
    /* it assigns filter data to newdata*/
    this.newdata = this.arryd;
    console.log(this.newdata);
  }
  /* when click on  buy button this function is called.. */
  mobileInfo(searchTerm: any) {
    searchTerm = JSON.stringify(searchTerm);
    localStorage.setItem("mobile", searchTerm);
    this.router.navigate(['/mobileinfo']);
  }

}
