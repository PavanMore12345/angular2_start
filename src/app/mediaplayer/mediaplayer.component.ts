import { Component, OnInit,ViewContainerRef  } from '@angular/core';
// import * as YouTubePlayer from 'youtube-player';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import {RouterModule, Routes, Router} from '@angular/router';
import { Injectable }     from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ToastsManager,ToastOptions } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit {
   id = 'U5Mf1r6lhrM';
 private player;
  private ytEvent;
data;
youtubedata;
youtubeplay;
playlistdata;
 constructor(public http: Http, private router: Router,private toastr: ToastsManager,
     private _vcr: ViewContainerRef )
     {
           this.toastr.setRootViewContainerRef(_vcr);
        }
//     var obj;
//          this.getJSON().subscribe(data => obj=data, error => console.log(error));
// console.log("obj",obj);
 ngOnInit() {
   //  this.http.get('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCK8sQmJBp8GCxrOtXWBpyEA&maxResults=25&key=AIzaSyC4qm4umraWnpUhFvO9ABfZAogs2YIwH7k').subscribe(
   //    (res: any) =>
   //    {
   //       this.data=res._body;
   //       localStorage.setItem("youtubedata",JSON.stringify(this.data));
   //     //console.log(res._body);
   //    })
    this.http.get('assets/youtube1.json')
    .subscribe((res: any) => {
       let data = res.json();
       this.youtubedata=data.data;
      // console.log("mock data" + data.data[2].id);
        //return response.json();
    });
this.playlistdata=JSON.parse(localStorage.getItem("playlist"));

}

  onStateChange(event) {
    this.ytEvent = event.data;
  }
 savePlayer(player) {
   this.player = player;
 }

 playVideo() {
    console.log(this.youtubedata);
   this.player.playVideo();
 }
youtube(data)
{

   var data1;
   var names=[];
   var a=[];
   if(localStorage.getItem("playlist"))
   {
       data1=JSON.parse(localStorage.getItem("playlist"));
       names=data1;
       console.log(names);
       for(let i=0;i<names.length;i++)
       {
           if(names[i].id==data.id)
           {
                this.toastr.error("Oops!", 'it already exist in playlist.');
           return ;
          }
        //    alert("data is already in card");

       }
       names.push(data);
    }
    else
    {
        names.push(data);
    }
    let abc=JSON.stringify(names);
    localStorage.setItem("playlist",abc);
   this.toastr.success("success","it added to the playlist");
   console.log(data.videoId);
   this.youtubeplay=JSON.stringify(data.videoId);
   console.log(this.youtubeplay);
}

 // public getJSON(): Observable<any> {
 //         return this.http.get(".../youtube.json")
 //                         .map((res:any) => res.json())
 //                         .catch((error:any) => console.log(error));
 //
 //     }

 pauseVideo() {
   this.player.pauseVideo();
 }


}
