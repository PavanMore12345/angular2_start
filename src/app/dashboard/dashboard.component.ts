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
 //value="manufacturer";
 mobileData=[{id:'manufacturer',data:['samsung','sony','apple','htc','nokia']},
 {id:'storage',data:['16','32']},{id:'os',data:['windows','android','ios']},
 {id:'camera',data:['5','8','13','16']}];
 data1;
 //console.log(data1);
  constructor(private postsService: PostsService,public http: Http, private router: Router) { }
 ngOnInit() {
     this.http.post('https://choco-lava.herokuapp.com/api/login', "").subscribe(
             (res: any) => {
             //     this.load = false;
                 let data =res.json();
                 console.log("data",data.data[0].image);
                 this.data1= data.data;
                 console.log(this.data1);
             //     if (data.data == "User already exist!") {
             //         alert(data.data);
             //     }
             //     else {
             //         this.router.navigate(['/login']);
             //     }
              })

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
getData(data)
{
console.log(data);
//console.log(this.data1);
this.data1=this.data1.filter(res=>res.name.startsWith());
console.log("res",this.data1);
}

}
