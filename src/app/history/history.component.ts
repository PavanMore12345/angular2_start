import { Component, OnInit } from '@angular/core';
import {Popup} from 'ng2-opd-popup';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
history;
id;
  constructor(private popup:Popup) { }

  ngOnInit() {
      this.history=JSON.parse(localStorage.getItem("history"));
      console.log(this.history);
  }
  ratings(data,ratings)
  {
       var data1={id:this.id,ratings:ratings};
      var ratingArr=[];
      if(localStorage.getItem("rating"))
      {
         var ratingData=JSON.parse(localStorage.getItem("rating"));
         alert(JSON.stringify(ratingData));
         ratingArr=ratingData;
          alert(JSON.stringify(ratingArr));
         ratingArr.push(data1);

      }
      else
      {
          ratingArr.push(data1);
      }
      alert("id"+this.id);
      alert("ratings"+ratings);
      let abc=ratingArr;
    //    ratingArr.push("")
       localStorage.setItem("rating",JSON.stringify(abc));
    this.popup.hide();
  }
  popup1(data){
    this.popup.show();
    this.id=data;
  }

}
