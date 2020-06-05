import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  serverUrl = 'https://medicl-be.herokuapp.com';
  constructor(private http: HttpClient,private route:Router) { }
  getCustomer(){
    console.log('data service called');
    return this.http.get(this.serverUrl+'/customers');
  }
  getProducts(){
    return this.http.get(this.serverUrl+'/products');
  }
  AddItems(ind,arr,amount){
    return this.http.post(this.serverUrl+'/item',{ind,arr,amount});
  }
  deleteItems(Arr){
    return this.http.post(this.serverUrl+'/item/delete',{Arr});
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
