import { Component, OnInit } from '@angular/core';
import {User} from './register.interface';
import { PostsService } from '../posts.service';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public user:User;
    ngOnInit()
    {
        this.user =
        {
            firstname:'',
            password:''
        };
    }
constructor( private postsService: PostsService, private router: Router)
{}
posts: any = [];
    save(model:User,isValid:boolean):void
    {
    
        this.postsService.getAllPosts(model).subscribe(posts => {
            this.posts=posts;
            if(posts.status)
            {
            this.router.navigate(['']);
        }
            console.log(posts)
    // this.posts = posts;
   });
        console.log(model,isValid);
    }

}
