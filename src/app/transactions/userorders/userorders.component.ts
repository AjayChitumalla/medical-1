import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.css']
})
export class UserordersComponent implements OnInit {
  orders;
  constructor(public data:TransactionService) { }

  ngOnInit() {
    if(localStorage.getItem('ShopName')!=""){
    this.data.myorders(localStorage.getItem('ShopName')).subscribe(d=>{
      this.orders=d['Items'];
    })
  }
  }
  registered(){
    if(localStorage.getItem('ShopName')!="")
    return true;
    return false;
  }
}
