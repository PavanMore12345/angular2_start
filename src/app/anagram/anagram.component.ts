import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

ok(string1,string2)
{
   // console.log("user",string1);
   // console.log("str",string2);
   // var string1=new String(string1);
   // var string2= new String(string2);
   string1=string1.replace(/ /g,'');
   string2=string2.replace(/ /g,'');
if(string1.length!=string2.length)
{
   console.log("string is not anagram");
}else
{
string1 = string1.split('').sort().join('');
string2 =string2.split('').sort().join('');
if(string1==string2)
{
   console.log("string is anagram");
}else
{
   console.log("string is not anagram");
}
console.log("string1",string1);
console.log("string2",string2);
 }

}
}
