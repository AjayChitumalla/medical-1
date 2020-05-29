import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password="";
  invusr="";
  invpwd="";
  constructor(private data:DataService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  valid(){
    if(this.username!="" && this.password!="")
    return true;
    return false;
  }
  onsubmit(username,password){
    this.data.login(username,password).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token',res['token']);
        localStorage.setItem('username',res['docs'].username);
        localStorage.setItem('ShopName',res['docs'].ShopName);
        this.router.navigate(['/newOrder']);
      },
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.invusr="401";
            this.username="";
            this.password="";
          }
          if(err.status === 402){
            this.invpwd="402";
            this.password="";
          }
        }
      } 
    )
  }
}
