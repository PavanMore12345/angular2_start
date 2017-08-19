import { Component, OnInit } from '@angular/core';
import {User} from './address.interface';
import {RouterModule, Routes, Router} from '@angular/router';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
public user:User;
address;
  constructor(private router: Router) { }

  ngOnInit() {
      this.user =
      {
          firstname:'',
          password:''
      };
  }
addressinfo(user:User)
{
    console.log("this.adress",user);
     this.address=user;
     this.address=JSON.stringify(this.address);
     console.log("this adress",this.address);
     localStorage.setItem("addressBar",this.address);
     this.router.navigate(['/payamentinfo']);

}
}
