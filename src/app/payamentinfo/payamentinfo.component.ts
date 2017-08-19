import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import {Toast, ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-payamentinfo',
  templateUrl: './payamentinfo.component.html',
  styleUrls: ['./payamentinfo.component.css']
})
export class PayamentinfoComponent implements OnInit {
  userInfo;
  totalpayment;
  constructor(private router: Router, private toastr: ToastsManager,
    private _vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem("addressBar"));
   //  console.log(this.userInfo);
    this.totalpayment = JSON.parse(localStorage.getItem("totalpay"));
  }

  confirm() {
    var names = [], data1, mobiledata;
    data1 = JSON.parse(localStorage.getItem("addToCard"));
    names;
    if (localStorage.getItem("history")) {
      mobiledata = JSON.parse(localStorage.getItem("history"));
      names = mobiledata;
      // console.log(names);
      for (let i = 0; i < data1.length; i++) {
        names.push(data1[i])
      }
    } else {
      for (let i = 0; i < data1.length; i++) {
        names.push(data1[i]);
      }
    }
    let abc = JSON.stringify(names);
    localStorage.setItem("history", abc);
    var data = JSON.parse(localStorage.getItem("history"));
   //  console.log("history", data);
    var empty = [];
   // this.toastr.success("Success", 'your order successfully placed');
   this.toastr.success('your order successfully placed', 'Success!', {dismiss: 'controlled'})
     .then((toast: Toast) => {
          setTimeout(() => {
              this.toastr.dismissToast(toast);
          }, 1000);
     });
    localStorage.setItem("addToCard", JSON.stringify(empty));
    localStorage.setItem("count", JSON.stringify(0));
    localStorage.setItem("totalpay", JSON.stringify(0));
  }

}
