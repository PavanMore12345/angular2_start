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
  baseUrl: string = 'https://www.youtube.com/embed/';
  // id = 'U5Mf1r6lhrM';
  player;
  private ytEvent;
  id;
  data;
  abc;
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
  constructor(public http: Http, private router: Router, private toastr: ToastsManager,
    private _vcr: ViewContainerRef, private sanitizer: DomSanitizer) {
    this.sant = this.sanitizer;
    console.log(this.video);
    this.toastr.setRootViewContainerRef(_vcr);
    console.log("this.url", this.url);
  }

  ngOnInit() {
    console.log("ngoninit");
    this.youplay = JSON.parse(localStorage.getItem("youtubeid"));
    console.log("this.youplay", this.youplay);
    this.http.get('assets/youtube.json')
      .subscribe((res: any) => {
        let data = res.json();
        this.youtubedata = data.items;
        this.youtubedatacopy = this.youtubedata;
      });

    this.http.get('assets/sony.json')
      .subscribe((res: any) => {
           let data = res.json();
           this.sonydata = data.items;
           this.sonydatacopy = this.sonydata;
      });

    this.http.get('assets/samsung.json')
      .subscribe((res: any) => {
        let data = res.json();
        this.samsungdata = data.items;
        this.samsungdatacopy = this.samsungdata;
      });

    this.playlistdata = JSON.parse(localStorage.getItem("playlist"));
    this.playedInfo = JSON.parse(localStorage.getItem("playedData"));
    console.log(this.playedInfo);
  }

  onStateChange(event) {
    console.log('player state', event.data);
    this.ytEvent = event.data;
    console.log('player state', event.data);
  }

  saveplay(player) {
    console.log("sfdsg");
    this.player = player;
    console.log('player instance', player);
  }

  pauseVideo() {
    var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
    console.log(iframe);
    iframe.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  }

  deleteDataplay(data) {
    var index = this.playedInfo.indexOf(data);
    this.playedInfo.splice(index, 1);
    console.log(data);
    let remove = JSON.stringify(this.playedInfo);
    localStorage.setItem("playedData", remove);
  }

  playVideo() {
    var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
    console.log(iframe);
    iframe.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
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
              if (names[i].snippet.title == data.snippet.title) {
                   this.toastr.error("Oops!", 'it already exist in playlist.');
                   return;
               }
         }
         names.push(data);
    }else {
      names.push(data);
    }

   let abc = JSON.stringify(names);
   localStorage.setItem("playlist", abc);
   this.toastr.success("success", "it added to the playlist");
   console.log(data.videoId);
   this.youtubeplay = JSON.stringify(data.videoId);
   console.log(this.youtubeplay);
   this.ngOnInit();
 }

  deleteData(data) {
    var index = this.playlistdata.indexOf(data);
    this.playlistdata.splice(index, 1);
    console.log(data);
    let remove = JSON.stringify(this.playlistdata);
    localStorage.setItem("playlist", remove);
  }


  mediaPlayer(data) {
    console.log("data");
    console.log(data);
    console.log(data.id.videoId);
    this.video = { id: data.id.videoId };
    this.playImage = data.snippet.thumbnails.medium.url;
    var data1;
    var names = [];
    var a = [];
    if (localStorage.getItem("playedData")) {
      data1 = JSON.parse(localStorage.getItem("playedData"));
      names = data1;
      console.log(names);
      for (let i = 0; i < names.length; i++) {
       if (names[i].snippet.title == data.snippet.title) {
          return;
        }
      }
      names.push(data);
    }
    else {
      names.push(data);
    }
    let abc = JSON.stringify(names);
    localStorage.setItem("playedData", abc);
  }

  playButton() {
    this.url = this.sant.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id + '?autoplay=1');
    console.log(this.url);
  }

  stopButton() {
    this.url = this.sant.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id + '?autoplay=0');
  }

  googleclick() {
    this.googlevalue = !this.googlevalue;
  }

  sonyclick() {
    this.sonyvalue = !this.sonyvalue;
  }

  samsungclick() {
    this.samsungvalue = !this.samsungvalue;
  }

  search(): void {
    let term = this.searchTerm;
    this.youtubedata = this.youtubedatacopy.filter(function(tag) {
      return tag.snippet.title.indexOf(term) >= 0;
    });
    this.sonydata = this.sonydatacopy.filter(function(tag) {
      return tag.snippet.title.indexOf(term) >= 0;
    });
    this.samsungdata = this.samsungdatacopy.filter(function(tag) {
      return tag.snippet.title.indexOf(term) >= 0;
    });
  }

}
