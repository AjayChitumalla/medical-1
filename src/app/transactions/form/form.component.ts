import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { identifierName } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  products;
  customers;
  selected;
  cart=[];
  amount=0;
  ind;
  constructor(public data:TransactionService,private route:Router) { }
    ngOnInit() {
    this.data.getCustomer().subscribe(
      d => this.customers = d,
      err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.route.navigate(['/login']);
          }
          if(err.status === 500){
            this.route.navigate(['/login']);
          }
        }
      }
      );
    this.data.getProducts().subscribe(p => {
      this.products = p;
    });
  }
  setName(){
    console.log(this.selected);
  }
  shop(){
    if(localStorage.getItem('ShopName'))
    return true;
    return false;
  }
  add(i){
    var j=i.toString();
    var s=parseInt(document.getElementById("count"+j).textContent);
    s++;
    document.getElementById("count"+j).textContent=s.toString();
    document.getElementById("m"+j).setAttribute("style","display:inline");
    var item={
      Name:this.products[i].Name,
      Price:this.products[i].Price,
      Quantity:s,
      Time:new Date().toLocaleString()
    }
    this.ind=this.cart.findIndex(e => e.Name === item.Name);
    if(this.ind==-1){
      this.amount+=item.Price*item.Quantity;
      console.log(this.amount);
      this.cart.push(item);
    }
    else{
       this.cart[this.ind].Quantity++;
       this.amount+=this.cart[this.ind].Price;
       console.log(this.amount);
     }
    console.log(this.cart);
  }
  check(i){
    var j=i.toString();
    var s=parseInt(document.getElementById("count"+j).textContent);
    if(s==1){
      document.getElementById("m"+j).setAttribute("style","display:none")
    }
    else
      document.getElementById("m"+j).setAttribute("style","display:inline")
  }
  remove(i){
    var j=i.toString();
    var s=parseInt(document.getElementById("count"+j).textContent);
    if(s>0)
    s--;
    document.getElementById("count"+j).textContent=s.toString();
    var item={
      Name:this.products[i].Name,
      Price:this.products[i].Price,
      Quantity:s,
      Time:new Date().toLocaleString()
    }
    this.ind=this.cart.findIndex(e => e.Name === item.Name);
    this.cart[this.ind].Quantity--;
    this.amount-=this.cart[this.ind].Price;
    console.log(this.amount);
    console.log(this.cart);
  }
  valid(){
    if(this.selected)
    return true;
    return false;
  }
  permission(){
    if(localStorage.getItem('username')==='abc')
    return true;
    return false;
  }
  OnSubmit(){
    this.data.AddItems(this.customers[this.selected].ShopName,this.cart,this.amount).subscribe(d=>console.log(d));
    this.selected='';
    this.cart=[];
    this.data.getProducts().subscribe(p => {
      this.products = p;
    });
  }
  SpSubmit(){
    //this.data.AddItems(localStorage.getItem('username'),this.cart,this.amount).subscribe(d=>console.log(d));
    console.log(localStorage.getItem('ShopName'),this.cart,this.amount);
    this.data.AddItems(localStorage.getItem('ShopName'),this.cart,this.amount).subscribe(d=>console.log(d));
    this.selected='';
    this.cart=[];
    this.data.getProducts().subscribe(p => {
      this.products = p;
    });
  }
}