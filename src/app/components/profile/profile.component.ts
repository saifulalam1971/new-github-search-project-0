import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username : string='';
  userDetail : any;
  imgurl : string='';
  name : string='';
  bio : string='';
  email : string='';
  followers : number=1;
  following:any;
  company : string='';
  location : string='';
  memberSince:string='';
  blog:string='';
  url:string='';
  public_repos:any;
  public_gists:any;

  repoName:string[]=[];
  repoForks:number[]=[];
  repoWatchers:number[]=[];
  repoStar:number[]=[];
  repoUrl:string[]=[];

  constructor(private route : ActivatedRoute , private githubService :GithubService , private router : Router ) { }

  ngOnInit(): void {
      this.username=this.githubService.getData();
      console.log("profile Name: ",this.username);
       this.githubService.getUser(this.username).subscribe({
         complete : () => {console.log("success!")},
         error:() => {
        
            alert("error ! search again");
           
            this.router.navigate(['searchpage']);
            
         },
         
         next : (data : any = []) => {
           this.userDetail = data;
           console.log("All : ",this.userDetail);
           this.bio = this.userDetail.bio;
           this.url = this.userDetail.html_url;
           this.followers = this.userDetail.followers;
           this.following= this.userDetail.following;
           this.public_gists= this.userDetail.public_gists;
           this.public_repos= this.userDetail.public_repos;
           this.blog = this.userDetail.blog;
           this.memberSince= this.userDetail.created_at;
           this.email= this.userDetail.email;
           this.company = this.userDetail.company;
           this.followers = this.userDetail.followers;
           this.imgurl = this.userDetail.avatar_url;
           this.location = this.userDetail.location;
           this.name = this.userDetail.name;
           console.log("amr name: ",data.name);
           console.log("amr name user: ",this.userDetail.name);


           
          }

       })


       this.githubService.getRepos(this.username).subscribe({
        complete : () => {console.log("success!")},
        error:() => {
       
           alert("error ! search again");
          
           this.router.navigate(['searchpage']);
           
        },
        next : (data : any = []) => {
          this.userDetail = data;
          console.log("All repos : ",this.userDetail);
          for(let i=0;i<this.public_repos;i++){
          console.log("All repos name : ",this.userDetail[i].name);
          this.repoName[i]=this.userDetail[i].name;
          this.repoForks[i]=this.userDetail[i].forks;
          this.repoWatchers[i]=this.userDetail[i].watchers;
          this.repoStar[i]=0;
          this.repoUrl[i]=this.userDetail[i].html_url;
          }
          


          
         }

      })

      

  }
  
}
