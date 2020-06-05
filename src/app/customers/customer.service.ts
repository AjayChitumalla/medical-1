import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  serverUrl = 'https://medicl-be.herokuapp.com';
  constructor(private http: HttpClient,private route:Router) { }
  getCustomers(){
    console.log('data service called');
    return this.http.get(this.serverUrl+'/customers');
  }
  NewC(customer){
    return this.http.post(this.serverUrl+'/customers',customer);
  }
  removeShop(shop){
    return this.http.delete(this.serverUrl+'/customers/'+shop);
  }
  updateShop(id,newname){
    return this.http.put(this.serverUrl+'/customers/'+id,{newname});
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
