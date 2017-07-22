import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
      this.data1=JSON.parse(localStorage.getItem("addtocard"));
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
       this.item=JSON.parse(localStorage.getItem("count"));
       if(this.item==1)
       {
           this.itemname="item";
       }else
       {
           this.itemname="items"
       }

  }
remove(data)
{
    var index=this.data1.indexOf(data);
    this.data1.splice(index,1);
    this.add=this.add-data.price;
    let remove=JSON.stringify(this.data1);
     localStorage.setItem("addtocard",remove);
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
     this.item=JSON.parse(localStorage.getItem("count"));
     if(this.item==1)
     {
         this.itemname="item";
     }else
     {
         this.itemname="items"
     }
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
}

}

}
