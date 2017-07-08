import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }
logout()
{
    this.postsService.signOut().subscribe(posts => {
        // this.posts=posts;
        // if(posts.status)
        // {
        this.router.navigate(['']);
    // }
        console.log(posts)
// this.posts = posts;
});
}

}
