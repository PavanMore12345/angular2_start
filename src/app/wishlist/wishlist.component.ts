import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { Toast,ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  data1; count; wishcount;
  constructor(private route: ActivatedRoute, private toastr: ToastsManager,
    private _vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {

    this.data1 = JSON.parse(localStorage.getItem("wishlist"))
    console.log("this.data1", this.data1);
   //  if (JSON.parse(localStorage.getItem("status"))) {
   //    this.toastr.success("Success", 'card added successfully.');
   //    localStorage.setItem("status", JSON.stringify(0));
   //  }
    this.wishcount = JSON.parse(localStorage.getItem("wicount"));
  }
  addtoCart(data) {
    console.log(data);
    var data1;
    var names = [];
    var a = [];
    if (localStorage.getItem("addToCard")) {
      data1 = JSON.parse(localStorage.getItem("addToCard"));
      names = data1;
      console.log(names);
      for (let i = 0; i < names.length; i++) {
        if (names[i].id == data.id) {
          //this.toastr.error("Oops!", 'it already exist in card.');
          this.toastr.error('it already exist into the wishlist', 'Oops!', {dismiss: 'controlled'})
            .then((toast: Toast) => {
                 setTimeout(() => {
                     this.toastr.dismissToast(toast);
                 }, 1000);
            });
          return;
        }
      }
      names.push(data);
    }
    else {
      names.push(data);
    }
    let abc = JSON.stringify(names);
    console.log("abc", abc);
    localStorage.setItem("addToCard", abc);
    this.count = JSON.parse(localStorage.getItem("count"));
    this.count = this.count + 1;
    localStorage.setItem("status", JSON.stringify(1));
    localStorage.setItem("count", JSON.stringify(this.count));
    var index = this.data1.indexOf(data);
    this.data1.splice(index, 1);
    let remove = JSON.stringify(this.data1);
    localStorage.setItem("wishlist", remove);
    this.wishcount--;
    localStorage.setItem("wicount", JSON.stringify(this.wishcount));
    //this.ngOnInit();
    //this.toastr.success("Success", 'card added successfully.');
    this.toastr.success('added to the cart', 'Success!', {dismiss: 'controlled'})
      .then((toast: Toast) => {
           setTimeout(() => {
               this.toastr.dismissToast(toast);
           }, 1000);
      });
  }
  delete(data) {
    var index = this.data1.indexOf(data);
    this.data1.splice(index, 1);
    let remove = JSON.stringify(this.data1);
    localStorage.setItem("wishlist", remove);
    this.wishcount--;
    localStorage.setItem("wicount", JSON.stringify(this.wishcount));
  }
}
