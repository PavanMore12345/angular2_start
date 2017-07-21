import { Component, OnInit } from '@angular/core';

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
items: number[]=[];
  constructor() { }

  ngOnInit() {
      this.data1=JSON.parse(localStorage.getItem("addtocard"));
       console.log("data1",this.data1);
       for(let data of this.data1)
       {
           this.add=this.add+data.price;
       }
       for(let data of this.data1)
       {
       for(this.i=1;this.i<=data.rating;this.i++)
       {
           this.items.push(this.i);
           console.log(this.items);
       }
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
}

}
