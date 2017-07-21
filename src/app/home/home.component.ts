import {Component,OnInit} from '@angular/core';
import {User} from './home.interface';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { Product } from './home';
// import{ FormGroup,FormControl} from '@angular/forms';
import { PostsService } from '../posts.service';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import {ToasterModule, ToasterService} from 'angular2-toaster';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public user:User;
    ngOnInit()
    {
        this.user =
        {
            email:'',
            password:''
    };
}
//private toasterService: ToasterService;
constructor( private postsService: PostsService, private router: Router)
{

}
    save(model:User,isValid:boolean)
    {
        console.log(model);
        this.postsService.login(model).subscribe(posts => {
            if(posts.status==true)
            {
                this.router.navigate(['/dashboard']);
            }else
            {
                this.router.navigate(['']);
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
