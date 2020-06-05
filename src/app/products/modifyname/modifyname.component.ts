import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-modifyname',
  templateUrl: './modifyname.component.html',
  styleUrls: ['./modifyname.component.css']
})
export class ModifynameComponent implements OnInit {
  products;
  selected="";
  newname="";
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
    this.ind=this.products.findIndex(e=>e.Name===this.newname);
    if(this.ind!=1){
      this.allowed=0;
    }
    else{
      this.data.updateProductName(this.selected,this.newname).subscribe(d=>{
        console.log(d);
      });
      window.location.reload();
    }
  }
}
