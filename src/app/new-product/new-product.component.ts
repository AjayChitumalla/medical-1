import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Router } from '@angular/router';
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
  constructor(public data:DataService,private route:Router) { }

  ngOnInit() {
  }
  valid(){
    if(this.product.Name!="" && this.product.Price!=0)
    return true;
    return false;
  }
  OnSubmit(Product){
    this.data.NewProduct(Product).subscribe(d=>console.log(d));
    setTimeout(()=>{this.route.navigate(['/newOrder'])},1000);
  }
  get diagnostic() { return JSON.stringify(this.product); }

}
