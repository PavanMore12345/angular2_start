import { Component, OnInit, ViewContainerRef  } from '@angular/core';
// import * as YouTubePlayer from 'youtube-player';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import {RouterModule, Routes, Router} from '@angular/router';
import { Injectable }     from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit {
  // id = 'U5Mf1r6lhrM';
  private player;
  private ytEvent;
  id;
  data;
  youtubedata;
  youtubeplay;
  playlistdata;
  sonydata
  youplay;
  samsungdata;
  googlevalue=false;
  samsungvalue=false;
  sonyvalue=false;
  constructor(public http: Http, private router: Router, private toastr: ToastsManager,
    private _vcr: ViewContainerRef) {
    this.id = 'U5Mf1r6lhrM';
    this.toastr.setRootViewContainerRef(_vcr);
  }
  //     var obj;
  //          this.getJSON().subscribe(data => obj=data, error => console.log(error));
  // console.log("obj",obj);
  ngOnInit() {
    this.youplay = undefined;
    this.googlevalue=true;
    //  this.http.get('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCK8sQmJBp8GCxrOtXWBpyEA&maxResults=25&key=AIzaSyC4qm4umraWnpUhFvO9ABfZAogs2YIwH7k').subscribe(
    //    (res: any) =>
    //    {
    //       this.data=res._body;
    //       localStorage.setItem("youtubedata",JSON.stringify(this.data));
    //     //console.log(res._body);
    //    })
    this.http.get('assets/youtube.json')
      .subscribe((res: any) => {
        let data = res.json();
        this.youtubedata = data.items;
        console.log(this.youtubedata);
        // console.log("mock data" + data.data[2].id);
        //return response.json();
      });
    this.http.get('assets/sony.json')
      .subscribe((res: any) => {
        let data = res.json();
        this.sonydata = data.items;

        //return response.json();
      });
      this.http.get('assets/samsung.json')
        .subscribe((res: any) => {
          let data = res.json();
          this.samsungdata = data.items;

          //return response.json();
        });
    this.playlistdata = JSON.parse(localStorage.getItem("playlist"));

  }

  onStateChange(event) {
    console.log('player state', event.data);
    this.ytEvent = event.data;
   //  this.savePlayer(event);
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    console.log(this.youtubedata);
    this.player.playVideo();
  }
  youtube(data) {
    var data1;
    var names = [];
    var a = [];
    if (localStorage.getItem("playlist")) {
      data1 = JSON.parse(localStorage.getItem("playlist"));
      names = data1;
      console.log(names);
      for (let i = 0; i < names.length; i++) {
        if (names[i].snippet.title ==data.snippet.title) {
          this.toastr.error("Oops!", 'it already exist in playlist.');
          return;
        }
        //    alert("data is already in card");

      }
      names.push(data);
    }
    else {
      names.push(data);
    }
    let abc = JSON.stringify(names);
    localStorage.setItem("playlist", abc);
    this.toastr.success("success", "it added to the playlist");
    console.log(data.videoId);
    this.youtubeplay = JSON.stringify(data.videoId);
    console.log(this.youtubeplay);
  }

  // public getJSON(): Observable<any> {
  //         return this.http.get(".../youtube.json")
  //                         .map((res:any) => res.json())
  //                         .catch((error:any) => console.log(error));
  //
  //     }

  deleteData(data) {
    var index = this.playlistdata.indexOf(data);
    this.playlistdata.splice(index, 1);
    //this.add=this.add-data.price;
    console.log(data);
    let remove = JSON.stringify(this.playlistdata);
    localStorage.setItem("playlist", remove);
  }


  mediaPlayer(data) {
    //   console.log("mock data" + this.sonydata.items[0].id.videoId);
    console.log("data");
    this.youplay = JSON.stringify(data.videoId);
    this.player.playVideo();
    console.log(this.youplay);
    //window.location.reload();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
 googleclick()
 {
    console.log(this.googlevalue);
    this.googlevalue=true;
    console.log(this.googlevalue);
    if(this.googlevalue==true)
    {
      this.googlevalue=false;
   }

}
sonyclick()
{
   this.sonyvalue=true;
   if(this.sonyvalue==true)
   {
      this.sonyvalue=false;
   }

}
samsungclick()
{
   this.samsungvalue=true;
   if(this.samsungvalue==true)
   {
      this.samsungvalue=false;
   }
}

}
