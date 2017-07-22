import { Component, OnInit } from '@angular/core';
import {User} from './address.interface';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
public user:User;
  constructor() { }

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
}
}
