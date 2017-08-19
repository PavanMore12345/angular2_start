import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {User} from './home.interface';
import { PostsService } from '../posts.service';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { ToastsManager, ToastOptions, Toast } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public user: User;
  constructor(private postsService: PostsService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router, private options: ToastOptions)
  {
    this.options.toastLife = 1000;
    this.toastr.setRootViewContainerRef(vcr);
  }

 ngOnInit() {
    this.user = {
        email: '',
        password: ''
      };
    if (JSON.parse(localStorage.getItem("logout"))) {
      this.toastr.success("Success", 'logout success');
      localStorage.setItem("logout", JSON.stringify(0));
    }
  }
  save(model: User, isValid: boolean) {
    console.log(model);
    this.postsService.login(model).subscribe(posts => {
      if (posts.status == true) {
        localStorage.setItem("dashboard", JSON.stringify(1));
        this.router.navigate(['/dashboard']);
      } else {
      this.toastr.error("Oops!", 'Something is wrong');
      }
    });
  }
}
