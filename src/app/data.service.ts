import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService{
  serverUrl = 'https://medicl-be.herokuapp.com';
  constructor(private http: HttpClient,private route:Router) { }
  atnc(username,password){
    return this.http.post(this.serverUrl+'/users/register',{username,password});
  }
  login(username,password){
    return this.http.post(this.serverUrl+'/users/login',{username,password});
  }
  auth(){
    return this.http.get(this.serverUrl+'/newOrder');
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  myorders(ShopName){
    return this.http.post(this.serverUrl+'/customers/myorders',{ShopName})
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('ShopName');
    this.route.navigate(['/']);
  }
}
