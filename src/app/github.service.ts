import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  userName: string='';
  constructor(private  http : HttpClient) { }

    url : string = "https://api.github.com/users/";


    getUser(userId : string){
       return this.http.get(this.url+userId);
    } 
    getRepos(userId : string){
      return this.http.get(this.url+userId+'/repos');
   } 
    updateUsername(username: string) {
      this.userName = username;
      console.log("service username: ",this.userName);
  }
  getData(){
    console.log("get username: ",this.userName);
    return this.userName;
  }
}
