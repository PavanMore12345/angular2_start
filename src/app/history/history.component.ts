import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {Popup} from 'ng2-opd-popup';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
history;
id;
  constructor(private popup:Popup,private toastr: ToastsManager,
		private _vcr: ViewContainerRef) {
this.toastr.setRootViewContainerRef(_vcr);
}

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
         ratingArr=ratingData;
         ratingArr.push(data1);

      }
      else
      {
          ratingArr.push(data1);
      }
      let abc=ratingArr;
   this.toastr.info("Thanks", 'thanks for rating the mobile');
       localStorage.setItem("rating",JSON.stringify(abc));
    this.popup.hide();
  }
  popup1(data){
    this.popup.show();
    this.id=data;
  }
  remove(data)
  {
     console.log(data);
     var index=this.history.indexOf(data);
     this.history.splice(index,1);
     let remove=JSON.stringify(this.history);
     localStorage.setItem("history",remove);
    this.toastr.info("remove", 'you removed mobile from cart');
 }

}
