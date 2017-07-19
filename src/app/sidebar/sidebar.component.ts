import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    mobileData=[{id:'manufacturer',data:['Samsung','Sony','Apple','HTC','Nokia','ZTE']},
    {id:'storage',data:[16,32]},{id:'os',data:['Windows','Android','iOS']},
    {id:'camera',data:[5,8,12,15]}];
 @Output() clicked=new EventEmitter<any>();
 IsChecked;
  constructor() { }

  ngOnInit() {
  }
  onClick(id,value){
      console.log("sidebar");
      if ((<HTMLInputElement>document.getElementById(value)).checked === true) {
          console.log("checked");
          this.IsChecked=true;
        }
    if ((<HTMLInputElement>document.getElementById(value)).checked === false) {
              console.log("unchecked");
              this.IsChecked=false;
        }
let specification=
{
    head:id,
    data:value,
    checked:this.IsChecked,
}
console.log("specification",specification);
  this.clicked.emit(specification);
  }
  uncheck()
  {
for(let value of this.mobileData )
{
for(let data1 of value.data )
{
 data1 = data1.toString();
    // console.log("data1",data1);
if ((<HTMLInputElement>document.getElementById(data1)).checked === true) {
    (<HTMLInputElement>document.getElementById(data1)).checked =false;
//console.log("checked");
this.IsChecked=false;
let clear="clear";
this.clicked.emit(clear);
}
}
 }
}
}
