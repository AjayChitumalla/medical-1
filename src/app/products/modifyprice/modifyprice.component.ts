import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-modifyprice',
  templateUrl: './modifyprice.component.html',
  styleUrls: ['./modifyprice.component.css']
})
export class ModifypriceComponent implements OnInit {
  products;
  selected="";
  newprice:Number;
  constructor(public data:ProductService,private route:Router) { }

  ngOnInit() {
    this.data.getProducts().subscribe(
      d => this.products = d,
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
    if(this.selected && this.newprice)
    return true;
    return false;
  }
  OnSubmit(){
    alert("Are you sure to update the selected product price from database?");
    this.data.updateProductPrice(this.selected,this.newprice).subscribe(d=>{
      console.log(d);
    });
    window.location.reload();
  }
}
