import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router, Data} from '@angular/router';
@Component({
  selector: 'app-modifyshop',
  templateUrl: './modifyshop.component.html',
  styleUrls: ['./modifyshop.component.css']
})
export class ModifyshopComponent implements OnInit {
  customers;
  selected="";
  newname="";
  allowed=1;
  ind;
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
  setName(){
    console.log(this.selected);
  }
  valid(){
    if(this.selected && this.newname)
    return true;
    return false;
  }
  OnSubmit(){
    alert("Are you sure to update the selected shop from database?");
    this.ind=this.customers.findIndex(e=> e.ShopName === this.newname);
    if(this.ind !=-1){
      this.allowed=0;
    }
    else{
      this.data.updateShop(this.selected,this.newname).subscribe(d=>{
        console.log(this.selected,this.newname);
      });
      window.location.reload();
    }
  }
}
