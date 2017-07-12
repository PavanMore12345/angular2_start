import { Component, OnInit,OnDestroy } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mobileinfo',
  templateUrl: './mobileinfo.component.html',
  styleUrls: ['./mobileinfo.component.css']
})
export class MobileinfoComponent implements OnInit {
      data:any;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit()  {
           this.data=JSON.parse(localStorage.getItem("mobile"));
           console.log(this.data);
}
}
