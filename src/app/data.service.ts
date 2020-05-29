import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService{
  serverUrl = 'https://medicl-be.herokuapp.com';
  constructor(private http: HttpClient,private route:Router) { }
  getCustomers(){
    console.log('data service called');
    return this.http.get(this.serverUrl+'/customers');
  }
  NewC(customer){
    return this.http.post(this.serverUrl+'/customers',customer);
  }
  getProducts(){
    return this.http.get(this.serverUrl+'/products');
  }
  NewProduct(product){
    return this.http.post(this.serverUrl+'/products',product);
  }
  AddItems(ind,arr,amount){
    return this.http.post(this.serverUrl+'/item',{ind,arr,amount});
  }
  deleteItems(Arr){
    return this.http.post(this.serverUrl+'/item/delete',{Arr});
  }
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
  userShop(user,shop){
    console.log(user,shop);
    return this.http.post<any>(this.serverUrl+'/users/shopreg',{user,shop});
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('ShopName');
    this.route.navigate(['/']);
  }
}
