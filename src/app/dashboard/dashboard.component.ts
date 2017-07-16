import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { FilterdataPipe } from '../filterdata.pipe'
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 //value="manufacturer";
 //@Input() result:any="";
 data1;
  // arr = new Array("orange", "mango", "banana", "sugar");
 //sorted;
term:any[]=[];
flag:any[]=[];
 //console.log(data1);
  constructor(private postsService: PostsService,public http: Http, private router: Router) { }
 ngOnInit() {
    //  this.term="Fsdfsdf";
     this.http.post('https://choco-lava.herokuapp.com/api/login', "").subscribe(
             (res: any) => {
             //     this.load = false;
                 let data =res.json();
                      console.log(data);
                // console.log("data",data.data[0].image);
                 this.data1= data.data;
                 console.log("term",this.term.length);
              })
console.log(this.data1);
    //           this.data1.sort( function(name1, name2) {
	//     if ( name1.name < name2.name ){
	//     	return -1;
	//     }else if( name1.name > name2.name ){
	//         return 1;
	//     }else{
	//     	return 0;
	//     }
	// });
// let sorted=this.data1.sort()
// console.log("sorted",sorted);
     }


  onClicked(value:any)
  {
      console.log(this.term);
    for(var i=0;i<this.data1.length;i++)
    {
        console.log(this.data1[i].specs.manufacturer)
        if(this.data1[i].specs.manufacturer==value.data)
        {
    if (this.term.indexOf(this.data1[i]) === -1 && this.data1[i] !== '')
            this.term.push(this.data1[i]);
        }
        if(this.data1[i].specs.storage==value.data)
        {
            if (this.term.indexOf(this.data1[i]) === -1 && this.data1[i] !== '')
            this.term.push(this.data1[i]);
        }
        if(this.data1[i].specs.camera==value.data)
        {
            if (this.term.indexOf(this.data1[i]) === -1 && this.data1[i] !== '')
            this.term.push(this.data1[i]);
        }
        if(this.data1[i].specs.os==value.data)
        {
            if (this.term.indexOf(this.data1[i]) === -1 && this.data1[i] !== '')
            this.term.push(this.data1[i]);
        }
    }
  }


// getData(data)
// {
// console.log(data);
// //console.log(this.data1);
// this.data1=this.data1.filter(res=>res.name.startsWith(data));
// this.term=data;
// console.log("res",this.data1);
// }
mobileInfo(searchTerm:any)
{
    //(clicked)="onClicked($event)"
    //console.log(searchTerm);
//this.clicked.emit(searchTerm);
searchTerm=JSON.stringify(searchTerm);
localStorage.setItem("mobile",searchTerm);
this.router.navigate(['/mobileinfo']);
}

}
