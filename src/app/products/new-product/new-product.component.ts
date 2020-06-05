import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  product={
    Name:'',
    Price:0
  }
  products;
  ind;
  allowed=1;
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
  valid(){
    if(this.product.Name!="" && this.product.Price!=0)
    return true;
    return false;
  }
  OnSubmit(Product){
    this.ind=this.products.findIndex(e=>e.Name===this.product.Name);
    if(this.ind!=-1){
      this.allowed=0;
    }
    else{
      this.data.NewProduct(Product).subscribe(d=>console.log(d));
      setTimeout(()=>{this.route.navigate(['/newOrder'])},1000);
    }
  }
}
