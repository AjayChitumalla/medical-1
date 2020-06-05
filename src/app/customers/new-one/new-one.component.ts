import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  customer={
    ShopName:'',
    Amount:0
  }
  customers;
  ind;
  allowed=1;
  constructor(public data:CustomerService,private route:Router) { }

  ngOnInit() {
    this.data.getCustomers().subscribe(
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
    });
  }
  valid(){
    if(this.customer.ShopName!="")
    return true;
    return false;
  }
  OnSubmit(customer){
    this.data.NewC(customer).subscribe(d=>console.log(d));
    if(localStorage.getItem('username')!="abc"){
      console.log(customer.ShopName);
      localStorage.setItem('ShopName',customer['ShopName']);
      this.data.userShop(localStorage.getItem('username'),localStorage.getItem('ShopName')).subscribe(d=>(console.log(d)));
    }
    setTimeout(()=>{this.route.navigate(['/newOrder'])},1000);
  }
}
