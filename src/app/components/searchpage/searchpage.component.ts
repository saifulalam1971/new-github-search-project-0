import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/github.service';
@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss']
})
export class SearchpageComponent implements OnInit {
  isProfileShow:boolean=false;
  userName:string='';
  ngOnInit(){
    

  }
  constructor(private _githubService: GithubService, public route: Router) {
  }

  sendUser(){
    console.log("searchpage: ",this.userName);
    //this.router.navigate([`/profile/${this.userName}`]);
    // this.router.navigate(['/profile'], {queryParams: {userName: this.userName}});
    //this.route.navigate(['profile']);
    this._githubService.updateUsername(this.userName);
    this.isProfileShow=true;
    
 }

}
