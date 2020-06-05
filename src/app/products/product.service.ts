import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  serverUrl = 'https://medicl-be.herokuapp.com';
  constructor(private http: HttpClient,private route:Router) { }
  getProducts(){
    return this.http.get(this.serverUrl+'/products');
  }
  NewProduct(product){
    return this.http.post(this.serverUrl+'/products',product);
  }
  removeProduct(product){
    return this.http.delete(this.serverUrl+'/products/'+product);
  }
  updateProductName(id,name){
    return this.http.put(this.serverUrl+'/products/name/'+id,{name});
  }
  updateProductPrice(id,price){
    return this.http.put(this.serverUrl+'/products/price/'+id,{price});
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('ShopName');
    this.route.navigate(['/']);
  }
}
