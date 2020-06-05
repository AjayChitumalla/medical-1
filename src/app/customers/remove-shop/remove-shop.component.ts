import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-remove-shop',
  templateUrl: './remove-shop.component.html',
  styleUrls: ['./remove-shop.component.css']
})
export class RemoveShopComponent implements OnInit {
  customers;
  selected="";
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
      }
      );
  }
  setName(){
    console.log(this.selected);
  }
  valid(){
    if(this.selected)
    return true;
    return false;
  }
  OnSubmit(){
    alert("Are you sure to remove the selected shop from database?");
    this.data.removeShop(this.selected).subscribe(d=>{
      console.log(this.selected);
    });
    window.location.reload();
  }
}
