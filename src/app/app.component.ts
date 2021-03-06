import { Component,OnInit,ViewContainerRef } from '@angular/core';
import { PostsService } from './posts.service';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
// import { YoutubePlayerModule } from 'ng2-youtube-player';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/******************************************************************************
 *  Execution       :   1. default ng build command run then
 *                      2. if nodemon installed  nodemon app.js
 *
 *  Purpose         : online mobile shopping site.
 *
 *  @description
 *
 *  @file           : app.component.ts.
 *  @overview       : it shows the mobile with differant price and specification.
 *  @module         : 
 *  @author         : pavan <pavanmore82@gmail.com>
 *  @version        : 1.0
 *  @since          : 01-08-2017
 *
 ******************************************************************************/

export class AppComponent implements OnInit{
    constructor(private postsService: PostsService,public http: Http, private router: Router){

    }
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
               })
   }
}
