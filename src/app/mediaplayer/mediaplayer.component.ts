import { Component, OnInit, ViewContainerRef  } from '@angular/core';
// import * as YouTubePlayer from 'youtube-player';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import {RouterModule, Routes, Router} from '@angular/router';
import { Injectable }     from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
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
   video;
 baseUrl:string = 'https://www.youtube.com/embed/';
  // id = 'U5Mf1r6lhrM';
  private player: YT.Player;
  private ytEvent;
  id;
  data;
  url;
  youtubedata;
   youtubedatacopy;
  youtubeplay;
  playlistdata;
  sonydata;
  sonydatacopy;
  youplay;
  samsungdata;
  samsungdatacopy;
  googlevalue;
  samsungvalue;
  sonyvalue;
  searchTerm;
  playImage;
  playedInfo;
  sant;
   player22;
   done;
// window.onYouTubeIframeAPIReady() {
//   this.player22 = new YT.Player('player', {
//     height: '390',
//     width: '640',
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }
  constructor(public http: Http, private router: Router, private toastr: ToastsManager,
    private _vcr: ViewContainerRef,private sanitizer: DomSanitizer) {
      // console.log(this.ytEvent);
      this.sant=this.sanitizer;
      console.log(this.video);
    this.toastr.setRootViewContainerRef(_vcr);
 console.log("this.url",this.url);
  }
  //     var obj;
  //          this.getJSON().subscribe(data => obj=data, error => console.log(error));
  // console.log("obj",obj);
  ngOnInit() {
    console.log("ngoninit");
    this.youplay =JSON.parse(localStorage.getItem("youtubeid"));

    console.log("this.youplay",this.youplay);
   //   this.googlevalue=false;
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
        this.youtubedatacopy=this.youtubedata;

        // console.log("mock data" + data.data[2].id);
        //return response.json();
      });
    this.http.get('assets/sony.json')
      .subscribe((res: any) => {
        let data = res.json();
        this.sonydata = data.items;
        this.sonydatacopy=this.sonydata;

        //return response.json();
      });
      this.http.get('assets/samsung.json')
        .subscribe((res: any) => {
          let data = res.json();
          this.samsungdata = data.items;
          this.samsungdatacopy= this.samsungdata;

          //return response.json();
        });
    this.playlistdata = JSON.parse(localStorage.getItem("playlist"));
    this.playedInfo=JSON.parse(localStorage.getItem("playedData"));
    console.log(this.playedInfo);
  }
  // function onPlayerReady(event) {
  //         event.target.playVideo();
  //       }
  //       function onPlayerStateChange(event) {
  //       if (event.data == YT.PlayerState.PLAYING && !this.done) {
  //          setTimeout(stopVideo, 6000);
  //          this.done = true;
  //       }
  //      }
  //      function stopVideo() {
  //       player.stopVideo();
  //      }


  onStateChange(event) {
    console.log('player state', event.data);
    this.ytEvent = event.data;
    console.log('player state', event.data);
   //  this.savePlayer(event);
   // console.log("time" ,this.ytEvent.getCurrentTime());
  }
  saveplay(player) {
     console.log("sfdsg");
    this.player = player;
    console.log('player instance', player);
  }
 pauseVideo()
 {
   var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
   console.log(iframe);
   // iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' +   '","args":""}', '*');
   iframe.postMessage('{"event":"command","func":"'+'stopVideo'+   '","args":""}', '*');
   // var myPlayer = document.getElementById('playerid');
   // myPlayer.stopVideo();
 }
deleteDataplay(data)
{
   var index = this.playedInfo.indexOf(data);
   this.playedInfo.splice(index, 1);
   //this.add=this.add-data.price;
   console.log(data);
   let remove = JSON.stringify(this.playedInfo);
   localStorage.setItem("playedData", remove);

}

    playVideo()
    {

          var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
          console.log(iframe);
        iframe.postMessage('{"event":"command","func":"' + 'playVideo' +   '","args":""}', '*');
     }

  // playVideo() {
  //   // console.log(this.player.getIframe());
  //   // console.log(this.player.destroy());
  //   //console.log(this.youtubedata);
  //   console.log("player");
  //   this.player.playVideo();
  //   console.log( this.player.playVideo());
  //   console.log("time" ,this.player.getDuration());
  // }
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
   // window.location.reload();
    this.ngOnInit();
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
    console.log(data);
    console.log(data.id.videoId);
    this.video={id:data.id.videoId};
 this.url = this.sant.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);
   //  localStorage.setItem("youtubeid",JSON.stringify(data.id.videoId));
    //JSON.stringify(data.videoId);
    //console.log(this.youplay);
   //location.reload();
   this.playImage=data.snippet.thumbnails.medium.url;
   var data1;
   var names = [];
   var a = [];
   if (localStorage.getItem("playedData")) {
     data1 = JSON.parse(localStorage.getItem("playedData"));
     names = data1;
     console.log(names);
     for (let i = 0; i < names.length; i++) {
      if (names[i].snippet.title ==data.snippet.title) {
         // this.toastr.error("Oops!", 'it already exist in playlist.');
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
   localStorage.setItem("playedData", abc);


    //this.ngOnInit();
   //  console.log(data.snippet.thumbnails.mediu.url);
   //this.router.navigate(['/mediaPlayer']);
  }

  // pauseVideo() {
  //   this.player.pauseVideo();
  // }
 googleclick()
 {
    this.googlevalue=!this.googlevalue;
}
sonyclick()
{
   this.sonyvalue=!this.sonyvalue;

}
samsungclick()
{
   this.samsungvalue=!this.samsungvalue;
}
search(): void
   {
    let term = this.searchTerm;
    //if(term!==""){
    this.youtubedata =  this.youtubedatacopy.filter(function(tag) {
        return tag.snippet.title.indexOf(term) >= 0;
    });
    this.sonydata =  this.sonydatacopy.filter(function(tag) {
      return tag.snippet.title.indexOf(term) >= 0;
      });
     this.samsungdata =  this.samsungdatacopy.filter(function(tag) {
        return tag.snippet.title.indexOf(term) >= 0;
     });

 //  }else{
 //     console.log("else.");
 //      this.youtubedata = this.youtubedatacopy;
 //      this.sonydata = this.sonydatacopy;
 //      this.samsungdata = this.samsungdatacopy;
 // }
}

}
