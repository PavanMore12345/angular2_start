import {Component,OnInit,ViewContainerRef} from '@angular/core';
import {User} from './home.interface';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { Product } from './home';
// import{ FormGroup,FormControl} from '@angular/forms';
import { PostsService } from '../posts.service';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { ToastsManager,ToastOptions,Toast } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public user:User;
    constructor( private postsService: PostsService,private toastr: ToastsManager,
           vcr: ViewContainerRef,private router: Router,private options:ToastOptions)
           {
              this.options.toastLife=10000;
               this.toastr.setRootViewContainerRef(vcr);
            }
    ngOnInit()
    {
        this.user =
        {
            email:'',
            password:''
    };
    if(JSON.parse(localStorage.getItem("logout")))
 {
 this.toastr.success("Success", 'logout success');
 localStorage.setItem("logout", JSON.stringify(0));
 }
 if(JSON.parse(localStorage.getItem("login")))
{
this.toastr.error("Oops!", 'Something is wrong');
localStorage.setItem("login", JSON.stringify(0));
}
}
//private toasterService: ToasterService;

    save(model:User,isValid:boolean)
    {
        console.log(model);
        this.postsService.login(model).subscribe(posts => {
            if(posts.status==true)
            {
            localStorage.setItem("dashboard", JSON.stringify(1));
                this.router.navigate(['/dashboard']);
            }else
            {
                localStorage.setItem("login", JSON.stringify(1));
                window.location.reload();
            }

        //     console.log(posts);
        // console.log(model,isValid);

    });
}
}
  // constructor() { }
  //
  // ngOnInit() {
  //
  // }
  //data = {};
  // formSubmit(value:any){
  //     console.log(value);
  //     console.log("dffgfdg");
  // }
