import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
  products;
  selected;
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
      }
      )
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
    alert("Are you sure to remove the selected product from database?");
    this.data.removeProduct(this.selected).subscribe(d=>{
      console.log(this.selected);
    });
    window.location.reload();
  }
}
