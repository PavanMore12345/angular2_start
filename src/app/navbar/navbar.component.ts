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

  constructor(public http: Http, private router: Router) { }

  ngOnInit() {
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
}
