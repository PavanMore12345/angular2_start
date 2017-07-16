import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    mobileData=[{id:'manufacturer',data:['Samsung','Sony','Apple','HTC','Nokia','ZTE']},
    {id:'storage',data:['16','32']},{id:'os',data:['Windows','Android','iOS']},
    {id:'camera',data:['5','8','12','15']}];
 @Output() clicked=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  onClick(id,value){
let specification=
{
    head:id,
    data:value
}
  this.clicked.emit(specification);
  }
}
