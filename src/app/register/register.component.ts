import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username="";
  password="";
  except="";
  constructor(private data:DataService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  valid(){
    if(this.username!="" && this.password!="")
    return true;
    return false;
  }
  onsubmit(username,password){
    this.data.atnc(username,password).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token',res['token']);
        localStorage.setItem('username',res['NewU'].username);
        localStorage.setItem('ShopName',res['NewU'].ShopName);
        this.router.navigate(['/newOrder']);
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status===409){
            this.except="409";
            this.username="";
            this.password="";
          }
        }
        console.log(err);
      }
    )
  }
}
