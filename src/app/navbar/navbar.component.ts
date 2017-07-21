import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
count;
  constructor(public http: Http, private router: Router) { }

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
}
