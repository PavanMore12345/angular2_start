import { Component,OnInit,ViewContainerRef } from '@angular/core';
import { PostsService } from './posts.service';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    constructor(private postsService: PostsService,public http: Http, private router: Router){

    }
  //title = 'app sdfsdfs!';
  ngOnInit() {
      this.http.get('/checklogin').subscribe(
              (res: any) => {
              //     this.load = false;
                  let data =res.json();
                 console.log("checklogin",data.status);
                 if(data.status==true)
                 {
                     this.router.navigate(['/dashboard']);
                 }else
                 {
                      this.router.navigate(['']);
                 }
              //     if (data.data == "User already exist!") {
              //         alert(data.data);
              //     }
              //     else {
              //         this.router.navigate(['/login']);
              //     }
               })

   }
}
