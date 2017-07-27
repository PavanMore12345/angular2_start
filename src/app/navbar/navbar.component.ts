import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { ToastsManager,ToastOptions,Toast } from 'ng2-toastr/ng2-toastr';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
count;
  constructor(public http: Http,private toastr: ToastsManager,
		 vcr: ViewContainerRef,private router: Router,private options:ToastOptions) {
            this.options.toastLife=10000;
             this.toastr.setRootViewContainerRef(vcr); }

  ngOnInit() {
     this.count=JSON.parse(localStorage.getItem("count"));
     console.log(this.count);
  }
  logout()
  {
      this.http.post('/logout', "").subscribe(
              (res: any) => {
              //     this.load = false;
                  let data =res.json();
              if (data.status==true)
              {
                localStorage.setItem("logout",JSON.stringify(1));
                this.router.navigate(['']);
              }else
              {
              this.router.navigate(['/dashboard']);
              }
               })
  }
  addcard()
  {
       this.router.navigate(['/addcard']);
  }
  home()
  {
     this.router.navigate(['/dashboard']);
  }
  history()
  {
      this.router.navigate(['/history']);
  }
}
