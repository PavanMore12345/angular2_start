import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts(obj:Object) {
    return this.http.post('/signup',obj)
      .map(res => res.json());
  }
  login(obj:Object) {
    return this.http.post('/login',obj)
      .map(res => res.json());
      //console.log(res);
  }
  // signOut() {
  //     console.log("signout");
  //   return this.http.post('/logout',"")
  //     .map(res => res.json());
  //     console.log(res);
  // }
}
