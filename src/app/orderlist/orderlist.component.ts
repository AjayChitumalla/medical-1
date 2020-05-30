import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  customers;
  orders=0;
  form:FormGroup;
  constructor(public data:DataService, private fb:FormBuilder,private route:Router) {
    this.form = this.fb.group({
      checkArray: this.fb.array([])
    })
   }

  ngOnInit() {
    this.data.getCustomers().subscribe(d => {
      this.customers = d;
    });
  }
  order(){
    for(var i=0;i<this.customers.length;i++){
      this.orders=this.orders+this.customers[i].Items.length;
    }
    return !!this.orders;
  }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  func(){
    console.log("success");
  }
  submitForm() {
    alert("Are you sure to remove the selected items from due list?");
    this.data.deleteItems(this.form.value.checkArray).subscribe(d => {
      console.log(this.form.value.checkArray);
    });
    window.location.reload();
    }
  }
