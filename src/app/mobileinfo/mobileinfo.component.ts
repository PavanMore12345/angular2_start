import { Component, OnInit, OnDestroy, NgModule, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
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
  constructor(private route: ActivatedRoute, private toastr: ToastsManager,
    private _vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(_vcr);
  }
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem("mobile"));
    for (this.i = 1; this.i <= this.data.rating; this.i++) {
      this.items.push(this.i);
    }
    if (JSON.parse(localStorage.getItem("status"))) {
      this.toastr.success("Success", 'card added successfully.');
      localStorage.setItem("status", JSON.stringify(0));
    }
  }
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
        if (names[i].id == data.id) {
          this.toastr.error("Oops!", 'it already exist in card.');
          return;
        }
      }
      names.push(data);
    } else {
      names.push(data);
    }
    let abc = JSON.stringify(names);
    console.log("abc", abc);
    localStorage.setItem("addToCard", abc);
    this.count = JSON.parse(localStorage.getItem("count"));
    this.count = this.count + 1;
    localStorage.setItem("status", JSON.stringify(1));
    window.location.reload();
    localStorage.setItem("count", JSON.stringify(this.count));
  }
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
          this.toastr.error("Oops!", 'it already exist in wishlist.');
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
    this.toastr.success("Success", 'successfully added to the wishlist.');
    localStorage.setItem("wicount", JSON.stringify(this.wishlistcount));
  }
}
