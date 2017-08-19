import { Component, OnInit, OnDestroy, NgModule, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Toast,ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
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
  mobileData: any;
  data: any;
  cart: any[] = [];
  i: any;
  items: number[] = [];
  public names = new Array();
  count = 0;
  wishlistcount = 0;
  @Output() clicked = new EventEmitter<any>();
  constructor(private route: ActivatedRoute, private toastr: ToastsManager, private options:ToastOptions,
    private _vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(_vcr);
    this.options.toastLife = 1000;
  }
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem("mobile"));
    /* for displaying rating of the mobile. */
    for (this.i = 1; this.i <= this.data.rating; this.i++) {
      this.items.push(this.i);
    }
  }
  /* when click on addtoCart button this function will call. */
  addtoCart(data) {
    console.log("addtoCart");
    var mobileData;
    var names = [];
    var a = [];
    if (localStorage.getItem("addToCard")) {
      mobileData = JSON.parse(localStorage.getItem("addToCard"));
      names = mobileData;
      console.log(names);
      for (let i = 0; i < names.length; i++) {
         /*it check mobile already exist in the list or not */
        if (names[i].id == data.id) {
          this.toastr.error('It already exist into the cart.. ', 'Oops!', {dismiss: 'controlled'})
            .then((toast: Toast) => {
                 setTimeout(() => {
                     this.toastr.dismissToast(toast);
                 }, 1000);
            });
          return;
        }
      }
      names.push(data);
    } else {
      names.push(data);
    }
    let dataArray = JSON.stringify(names);
    console.log("abc", dataArray);
    localStorage.setItem("addToCard", dataArray);
    this.count = JSON.parse(localStorage.getItem("count"));
    this.count = this.count + 1;
    localStorage.setItem("status", JSON.stringify(1));
    localStorage.setItem("count", JSON.stringify(this.count));
    this.toastr.success('added to the cart', 'Success!', {dismiss: 'controlled'})
      .then((toast: Toast) => {
           setTimeout(() => {
               this.toastr.dismissToast(toast);
           }, 1000);
      });
  }
  /*when click on wishlist button this function will call.*/
  wishlist(data) {
    var wishlistdata;
    var names = [];
    var a = [];
    if (localStorage.getItem("wishlist")) {
      wishlistdata = JSON.parse(localStorage.getItem("wishlist"));
      names = wishlistdata;
      console.log(names);
      for (let i = 0; i < names.length; i++) {
        if (names[i].id == data.id) {
          this.toastr.error('it already exist in wishlist', 'Oops!', {dismiss: 'controlled'})
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
    let arrayData = JSON.stringify(names);
    console.log("abc", arrayData);
    localStorage.setItem("wishlist", arrayData);
    this.wishlistcount = JSON.parse(localStorage.getItem("wicount"));
    this.wishlistcount = this.wishlistcount + 1;
    this.toastr.success('added to the wishlist', 'Success!', {dismiss: 'controlled'})
      .then((toast: Toast) => {
           setTimeout(() => {
               this.toastr.dismissToast(toast);
           }, 1000);
      });
    localStorage.setItem("wicount", JSON.stringify(this.wishlistcount));
  }
}
