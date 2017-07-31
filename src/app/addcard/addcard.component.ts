import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {
data1;
add=0;
mobiledata;
i;
item;
itemname;
items: number[]=[];
total;
delivery;
totalPay;
  constructor(private router: Router,private toastr: ToastsManager,
		private _vcr: ViewContainerRef) {
this.toastr.setRootViewContainerRef(_vcr);
        }

  ngOnInit() {
      this.data1=JSON.parse(localStorage.getItem("addToCard"));
       console.log("data1",this.data1);
       for(let data of this.data1)
       {
           this.add=this.add+data.price;
       }
       if(this.add>=1000)
       {
           this.delivery=0;
       }else
       {
           this.delivery=40;
       }
       this.total=this.add+this.delivery;
      this.totalPay=JSON.stringify(this.total);
      localStorage.setItem("totalpay",this.totalPay);
       this.item=JSON.parse(localStorage.getItem("count"));
       if(this.item==1)
       {
           this.itemname="item";
       }else
       {
           this.itemname="items"
       }
       if(JSON.parse(localStorage.getItem("addcard")))
    {
     this.toastr.success("Success", 'mobile  removed from cart.');
    localStorage.setItem("addcard", JSON.stringify(0));
    }

  }
remove(data)
{


    var index=this.data1.indexOf(data);
    this.data1.splice(index,1);
    this.add=this.add-data.price;
    let remove=JSON.stringify(this.data1);
     localStorage.setItem("addToCard",remove);
     var count=JSON.parse(localStorage.getItem("count"));
     --count;
    localStorage.setItem("count",JSON.stringify(count));
    if(this.add>=1000)
    {
        this.delivery=0;
    }else
    {
        this.delivery=40;
    }
     this.total=this.add+this.delivery;
     this.totalPay=JSON.stringify(this.total);
     localStorage.setItem("totalpay",this.totalPay);
     this.item=JSON.parse(localStorage.getItem("count"));
     if(this.item==1)
     {
         this.itemname="item";
     }else
     {
         this.itemname="items"
     }
     localStorage.setItem("addcard", JSON.stringify(1));
      window.location.reload();
}
placeorder()
{
    var phonepe;
    console.log("placeorder");
// if ((<HTMLInputElement>document.getElementById('emi')).checked) {
//  phonepe = (<HTMLInputElement>document.getElementById('emi')).value;
// console.log("phonepe",phonepe);
// }
if ((<HTMLInputElement>document.getElementById('cash')).checked) {
 phonepe = (<HTMLInputElement>document.getElementById('cash')).value;
console.log("phonepe",phonepe);
}
// if ((<HTMLInputElement>document.getElementById('netBanking')).checked) {
//  phonepe = (<HTMLInputElement>document.getElementById('netBanking')).value;
// console.log("phonepe",phonepe);
// }
// if ((<HTMLInputElement>document.getElementById('debit')).checked) {
//  phonepe = (<HTMLInputElement>document.getElementById('debit')).value;
// console.log("phonepe",phonepe);
// }
if(phonepe=="cashondelivery")
{
    console.log("adreess");
    this.router.navigate(['/address']);
}else
{
    this.toastr.error("Payment", 'please select payment mode.');
}

}
wishlist()
{
   console.log("wishlist");
    this.router.navigate(['/wishlist']);
}

}
