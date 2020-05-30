import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

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
  constructor(public data:DataService,private route:Router) { }

  ngOnInit() {
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
  get diagnostic() { return JSON.stringify(this.customer); }
}
